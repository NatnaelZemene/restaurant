/**
 * MENU DATA — TRANSCRIBED FROM THE CLIENT'S REAL MENU PHOTOS
 * ----------------------------------------------------------------------------
 * Source: three photos supplied directly by the client.
 *   1. An English "Fasting Menu" sheet — clearly legible. Every item and
 *      price below from Soup, Salads, Pasta, Hot Drinks, Ethiopian Dishes,
 *      Juices, Snack Menu, and Local Beer & Traditional Drinks comes
 *      straight from that photo.
 *   2. An Amharic drinks poster ("የመጠጥ ዝርዝር").
 *   3. An Amharic snacks/grilled-meat poster ("የምክሰስ ምግቦቻችን").
 *
 * Photos 2 and 3 are stylized, angled photographs of printed posters, and a
 * handful of dish names and one or two prices in the smaller print were not
 * fully legible with certainty. Those items are flagged with
 * `verified: false` and a `note` explaining what's uncertain — the UI shows
 * a small marker on these so the owner knows exactly what to double-check
 * before this goes live. Everything else (`verified: true`, no flag) is a
 * direct, confident transcription.
 * ----------------------------------------------------------------------------
 */

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: string[];
  verified?: boolean;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "ethiopian",
    label: "Ethiopian Dishes",
    items: [
      {
        id: "eth-1",
        name: "Fasting Combo (Ayinet)",
        description:
          "A generous fasting platter \u2014 a mix of the kitchen's vegetarian stews and sides, served over injera.",
        price: "Birr 480",
        tags: ["Signature", "Vegan"],
        verified: true,
      },
      {
        id: "eth-2",
        name: "Ethiopian Shiro",
        description: "Spiced chickpea stew, slow-cooked and served with injera.",
        price: "Birr 400",
        tags: ["Vegan"],
        verified: true,
      },
      {
        id: "eth-3",
        name: "Cooked Vegetable",
        description: "Seasonal vegetables, prepared Ethiopian style.",
        price: "Birr 350",
        tags: ["Vegan"],
        verified: true,
      },
      {
        id: "eth-4",
        name: "Ethiopian Lentil",
        description: "Traditional spiced lentil stew.",
        price: "Birr 400",
        tags: ["Vegan"],
        verified: true,
      },
      {
        id: "eth-5",
        name: "Ethiopian Bean Stew",
        description: "Slow-cooked bean stew, prepared the traditional way.",
        price: "Birr 400",
        tags: ["Vegan"],
        verified: true,
      },
    ],
  },
  {
    id: "soup",
    label: "Soup",
    items: [
      {
        id: "soup-1",
        name: "Mushroom Soup",
        description: "Oil, mushroom, onion, garlic, salt, pepper, flour \u2014 served with croutons.",
        price: "Birr 360",
        verified: true,
      },
      {
        id: "soup-2",
        name: "Tomato Soup",
        description: "Oil, tomato, leek, onion, garlic, pepper, salt \u2014 served with croutons.",
        price: "Birr 310",
        verified: true,
      },
      {
        id: "soup-3",
        name: "Vegetable Soup",
        description:
          "Seasonal vegetable, leek, onion, garlic, pepper, salt \u2014 served with croutons.",
        price: "Birr 310",
        verified: true,
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      {
        id: "sal-1",
        name: "Green Salad",
        description: "Lettuce, green pepper, onion, house dressing.",
        price: "Birr 220",
        verified: true,
      },
      {
        id: "sal-2",
        name: "Nu Special Salad",
        description: "The house salad \u2014 Nu Restaurant's own recipe.",
        price: "Birr 350",
        tags: ["Signature"],
        verified: true,
      },
      {
        id: "sal-3",
        name: "Mixed Salad",
        description:
          "Lettuce, green pepper, carrot, cabbage, onion, tomato, house dressing.",
        price: "Birr 320",
        verified: true,
      },
      {
        id: "sal-4",
        name: "Avocado Salad",
        description: "Lettuce, tomato, onion, green pepper, carrot, house dressing.",
        price: "Birr 350",
        verified: true,
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      {
        id: "pas-1",
        name: "Pasta \u2014 Tomato Sauce",
        description:
          "Choice of macaroni, penne, spaghetti, or rice \u2014 tomato, leek, onion, garlic, oil, salt, pepper.",
        price: "Birr 350",
        verified: true,
      },
      {
        id: "pas-2",
        name: "Pasta \u2014 Vegetable Sauce",
        description:
          "Choice of macaroni, penne, spaghetti, or rice \u2014 seasonal vegetable, onion, garlic, pepper, salt.",
        price: "Birr 350",
        verified: true,
      },
    ],
  },
  {
    id: "snacks",
    label: "Snack Menu",
    items: [
      {
        id: "sna-1",
        name: "Vegetable Pizza",
        description: "House-baked pizza topped with seasonal vegetables.",
        price: "Birr 490",
        verified: true,
      },
      {
        id: "sna-2",
        name: "Vegetable Sandwich",
        description: "Fresh vegetables on house bread.",
        price: "Birr 490",
        verified: true,
      },
      {
        id: "sna-3",
        name: "French Fries",
        description: "Classic crisp-fried potatoes.",
        price: "Birr 320",
        verified: true,
      },
      {
        id: "sna-4",
        name: "Spring Roll",
        description: "Crisp-fried rolls, kitchen recipe.",
        price: "Birr 350",
        verified: true,
      },
      {
        id: "sna-5",
        name: "Peanuts",
        description: "A simple bar snack, served on request.",
        price: "Birr 80",
        verified: true,
      },
    ],
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    items: [
      {
        id: "hot-1",
        name: "Traditional Coffee",
        description: "Ethiopian coffee, prepared the traditional way.",
        price: "Birr 80",
        tags: ["Signature"],
        verified: true,
      },
      {
        id: "hot-2",
        name: "Machine Coffee",
        description: "Espresso-machine coffee.",
        price: "Birr 80",
        verified: true,
      },
      {
        id: "hot-3",
        name: "Nu Special Tea",
        description: "The house tea blend.",
        price: "Birr 100",
        tags: ["Signature"],
        verified: true,
      },
      {
        id: "hot-4",
        name: "Tea",
        description: "Classic black tea.",
        price: "Birr 60",
        verified: true,
      },
      {
        id: "hot-5",
        name: "Tea Selection",
        description:
          "A range of teas by the cup \u2014 mint or lemongrass, hibiscus or fruit, ginger, cinnamon, or pepper, and a house special blend.",
        price: "Birr 25\u201385",
        verified: false,
        note: "Amharic drinks poster \u2014 the exact tea names/pairings in the small print were hard to fully confirm from the photo. Prices for the tiers are legible; please confirm exact flavor names with the owner.",
      },
      {
        id: "hot-6",
        name: "Fresh Milk",
        description: "Served hot, on its own or with tea.",
        price: "Birr 50",
        verified: false,
        note: "Amharic drinks poster \u2014 name confirmed, please double-check price tiers with the owner.",
      },
    ],
  },
  {
    id: "juices",
    label: "Juices",
    items: [
      {
        id: "jui-1",
        name: "Seasonal Juice",
        description: "Fresh juice, made with whatever fruit is in season.",
        price: "Birr 250",
        verified: true,
      },
      {
        id: "jui-2",
        name: "Lemon Juice",
        description: "Fresh-squeezed lemon.",
        price: "Birr 250",
        verified: true,
      },
      {
        id: "jui-3",
        name: "Orange Juice",
        description: "Fresh-squeezed orange.",
        price: "Birr 250",
        verified: true,
      },
      {
        id: "jui-4",
        name: "Fresh Fruit Juice (by size)",
        description: "A larger or smaller glass of fresh fruit juice, by choice.",
        price: "Birr 119\u2013159",
        verified: false,
        note: "Amharic drinks poster \u2014 item and price tiers are visible but the exact fruit name in the small print wasn't fully legible. Confirm with the owner.",
      },
    ],
  },
  {
    id: "traditional-drinks",
    label: "Local Beer & Traditional Drinks",
    items: [
      {
        id: "trad-1",
        name: "Local Beer",
        description: "Ethiopian draft/bottled beer.",
        price: "Birr 150",
        verified: true,
      },
      {
        id: "trad-2",
        name: "Heineken Beer",
        description: "Bottled Heineken.",
        price: "Birr 200",
        verified: true,
      },
      {
        id: "trad-3",
        name: "Tej \u2014 Bottle",
        description: "Traditional Ethiopian honey wine, by the bottle.",
        price: "Birr 800",
        tags: ["Signature"],
        verified: true,
      },
      {
        id: "trad-4",
        name: "Tej \u2014 Berele (glass)",
        description: "Traditional Ethiopian honey wine, by the glass.",
        price: "Birr 260",
        tags: ["Signature"],
        verified: false,
        note: "The exact price was partly covered in the photo \u2014 legible as roughly 260 Birr; please confirm.",
      },
      {
        id: "trad-5",
        name: "Soft Drink",
        description: "Assorted bottled soft drinks.",
        price: "Birr 70",
        verified: true,
      },
      {
        id: "trad-6",
        name: "Sparkling Water",
        description: "Chilled sparkling water.",
        price: "Birr 70",
        verified: true,
      },
      {
        id: "trad-7",
        name: "Ambo Mineral Water",
        description: "Ethiopia's native sparkling mineral water.",
        price: "Birr 49",
        verified: false,
        note: "From the Amharic drinks poster \u2014 name and price legible with reasonable confidence.",
      },
      {
        id: "trad-8",
        name: "Bottled Water \u2014 0.5L",
        description: "Small bottle.",
        price: "Birr 50",
        verified: true,
      },
      {
        id: "trad-9",
        name: "Bottled Water \u2014 1L",
        description: "Large bottle.",
        price: "Birr 70",
        verified: true,
      },
    ],
  },
  {
    id: "grilled",
    label: "Grilled Meat & Platters",
    items: [
      {
        id: "gri-1",
        name: "French Fries (Platter Portion)",
        description: "A larger, shareable portion of fried potatoes.",
        price: "Birr 159",
        verified: false,
        note: "From the Amharic snacks poster \u2014 price legible, listed separately from the smaller Snack Menu portion.",
      },
      {
        id: "gri-2",
        name: "Grilled Meat with Vegetables",
        description: "A grilled meat platter served with seasonal vegetables.",
        price: "Birr 199",
        verified: false,
        note: "Amharic snacks poster \u2014 the general dish concept and price are legible; the exact Amharic dish name in the small print should be confirmed with the owner before printing.",
      },
      {
        id: "gri-3",
        name: "Grilled Meat Platter \u2014 Small",
        description: "A smaller-portion grilled meat platter.",
        price: "Birr 219",
        verified: false,
        note: "Amharic snacks poster \u2014 portion tier and price legible; exact dish name to confirm.",
      },
      {
        id: "gri-4",
        name: "Grilled Meat Platter \u2014 Medium",
        description: "A medium-portion grilled meat platter.",
        price: "Birr 299",
        verified: false,
        note: "Amharic snacks poster \u2014 portion tier and price legible; exact dish name to confirm.",
      },
      {
        id: "gri-5",
        name: "Grilled Meat Platter \u2014 Large",
        description: "A larger grilled meat platter, serves more than one.",
        price: "Birr 349\u2013389",
        verified: false,
        note: "Amharic snacks poster \u2014 several portion sizes in this range; exact dish names and tiers should be confirmed with the owner.",
      },
      {
        id: "gri-6",
        name: "Grilled Fish",
        description: "Grilled fish platter.",
        price: "Birr 319",
        verified: false,
        note: "Amharic snacks poster \u2014 dish and price reasonably legible.",
      },
      {
        id: "gri-7",
        name: "Family Combo Platter",
        description:
          "A larger combination platter, priced from roughly 429\u2013479 Birr depending on selection.",
        price: "Birr 429\u2013479",
        verified: false,
        note: "Amharic snacks poster (bottom section) \u2014 this looks like a set of combo/family platters at a few price tiers; exact naming for each tier wasn't fully legible and should be confirmed with the owner.",
      },
    ],
  },
];
