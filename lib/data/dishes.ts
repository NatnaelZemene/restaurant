export type SignatureDish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

// Pulled directly from the client's real "Fasting Menu" photo — these are
// three standout items worth featuring up top. Photography is still
// placeholder (only menu-text photos were provided, not food photography);
// swap /images/*.jpg for real shots of these dishes.
export const signatureDishes: SignatureDish[] = [
  {
    id: "sig-1",
    name: "Fasting Combo (Ayinet)",
    description:
      "The house sampler — a generous spread of the kitchen's vegetarian stews and sides, served over fresh injera.",
    price: "Birr 480",
    image: "/images/doro-wat.jpg",
  },
  {
    id: "sig-2",
    name: "Nu Special Salad",
    description: "The restaurant's own recipe — a Nu original, made to order.",
    price: "Birr 350",
    image: "/images/nu-special-salad.jpg",
  },
  {
    id: "sig-3",
    name: "Ethiopian Shiro",
    description:
      "Spiced chickpea stew, slow-cooked and served with warm injera.",
    price: "Birr 400",
    image: "/images/signature-dish-02.jpg",
  },
];
