export const ALLOWED_CATEGORIES = ["FOOD", "DRINK"] as const;
export type CategoryType = (typeof ALLOWED_CATEGORIES)[number];
