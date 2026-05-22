"use client";

import { useEffect } from "react";

const WHEEL_THRESHOLD = 180;
const LOCK_MS = 650;

export function NarrativeScrollController() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const desktopLayout = window.matchMedia("(min-width: 1024px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!desktopLayout || !finePointer || reduceMotion) {
      return;
    }

    let accumulated = 0;
    let locked = false;
    let resetTimer: number | undefined;

    const sections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"))
        .filter((section) => section.offsetParent !== null)
        .sort((a, b) => Number(a.dataset.scrollOrder ?? 0) - Number(b.dataset.scrollOrder ?? 0));

    const currentSectionIndex = (items: HTMLElement[]) => {
      const sectionTop = (section: HTMLElement) => section.getBoundingClientRect().top + window.scrollY;
      const activeOrder = Number(document.documentElement.dataset.activeScrollOrder);

      if (Number.isFinite(activeOrder)) {
        const activeIndex = items.findIndex((section) => Number(section.dataset.scrollOrder) === activeOrder);

        if (activeIndex >= 0 && Math.abs(sectionTop(items[activeIndex]) - window.scrollY) < window.innerHeight * 0.75) {
          return activeIndex;
        }
      }

      const viewportTop = window.scrollY;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((section, index) => {
        const distance = Math.abs(sectionTop(section) - viewportTop);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      const items = sections();
      if (items.length < 2) {
        return;
      }

      event.preventDefault();

      if (locked) {
        return;
      }

      accumulated += event.deltaY;

      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }

      resetTimer = window.setTimeout(() => {
        accumulated = 0;
      }, 700);

      if (Math.abs(accumulated) < WHEEL_THRESHOLD) {
        return;
      }

      const direction = accumulated > 0 ? 1 : -1;
      const nextIndex = Math.min(Math.max(currentSectionIndex(items) + direction, 0), items.length - 1);

      accumulated = 0;

      if (items[nextIndex]) {
        locked = true;
        document.documentElement.dataset.activeScrollOrder = items[nextIndex].dataset.scrollOrder ?? String(nextIndex);
        items[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });

        window.setTimeout(() => {
          locked = false;
        }, LOCK_MS);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }
    };
  }, []);

  return null;
}
