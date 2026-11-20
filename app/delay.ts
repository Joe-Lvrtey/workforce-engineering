import type { CSSProperties } from "react";

/** Stagger for [data-reveal] elements: sets the --d transition delay. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
