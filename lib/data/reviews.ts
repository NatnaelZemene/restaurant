export type Review = {
  id: string;
  quote: string;
  author: string;
  placeholder?: boolean;
};

/**
 * Nu Restaurant holds a VERIFIED 4.8★ average across 30 Google reviews.
 * Individual review quotes below are illustrative placeholders (writing
 * out real customers' words without permission isn't appropriate) — swap
 * these for real, permission-cleared quotes from the owner's Google/
 * Instagram reviews before launch.
 */
export const reviews: Review[] = [
  {
    id: "rev-1",
    quote:
      "The kind of place you bring visitors when you want them to understand Gondar's hospitality.",
    author: "Google review",
    placeholder: true,
  },
  {
    id: "rev-2",
    quote:
      "Warm service, generous portions, and a coffee ceremony that feels genuinely unhurried.",
    author: "Google review",
    placeholder: true,
  },
  {
    id: "rev-3",
    quote: "A family favorite — consistent quality, every single visit.",
    author: "Google review",
    placeholder: true,
  },
];
