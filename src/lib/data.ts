export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "shadow-box" | "heart-box" | "custom";
  color: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "purple-stethoscope",
    name: "Purple Stethoscope Heart",
    description:
      "Elegant purple roses arranged in a heart shape with a stethoscope accent and personalized message. Perfect gift for nurses, doctors, and healthcare heroes.",
    price: 85,
    category: "shadow-box",
    color: "Purple",
    image: "/assets/purple-stethoscope.jpg",
    featured: true,
  },
  {
    id: "royal-blue-wedding",
    name: "Royal Blue Wedding Heart",
    description:
      "Stunning royal blue satin roses in a heart-shaped shadow box with custom names, date, and venue. A timeless keepsake for weddings and anniversaries.",
    price: 95,
    category: "shadow-box",
    color: "Blue",
    image: "/assets/royal-blue.jpg",
    featured: true,
  },
  {
    id: "red-wedding-quran",
    name: "Red Rose Wedding Frame",
    description:
      'Beautiful red roses in a heart formation with custom couple names, wedding date, and the verse "And We Created You In Pairs." A meaningful celebration of love.',
    price: 95,
    category: "shadow-box",
    color: "Red",
    image: "/assets/red-wedding.jpg",
    featured: true,
  },
  {
    id: "mom-gold-lettering",
    name: "MOM Heart Shadow Box",
    description:
      "Deep red roses in a heart shape with gold MOM lettering and personalized children's names. The perfect tribute for Mother's Day or any occasion.",
    price: 90,
    category: "shadow-box",
    color: "Red",
    image: "/assets/mom-gold.jpg",
    featured: true,
  },
  {
    id: "yellow-anniversary",
    name: "Yellow Rose Anniversary Frame",
    description:
      "Soft yellow roses arranged in a heart with custom couple names, anniversary date, and a love quote by Aristotle. Elegant white shadow box frame.",
    price: 95,
    category: "shadow-box",
    color: "Yellow",
    image: "/assets/yellow-anniversary.jpg",
    featured: true,
  },
  {
    id: "heart-box-roses-chocolate",
    name: "Rose & Chocolate Heart Box",
    description:
      "Luxurious heart-shaped box filled with handcrafted satin roses and premium Ferrero Rocher chocolates. The ultimate romantic gift.",
    price: 65,
    category: "heart-box",
    color: "Red",
    image: "/assets/heart-box.jpg",
    featured: true,
  },
  {
    id: "heart-box-butterfly",
    name: "Rose & Chocolate Butterfly Box",
    description:
      "Elegant heart box with deep red roses, Ferrero Rocher chocolates, and a gold butterfly accent. A stunning surprise for someone special.",
    price: 70,
    category: "heart-box",
    color: "Red",
    image: "/assets/heart-butterfly.jpg",
    featured: false,
  },
  {
    id: "purple-heart-custom",
    name: "Custom Purple Heart Frame",
    description:
      "Lavender purple roses in a heart-shaped arrangement with custom text and personalization. Perfect for appreciation gifts, thank-you presents, or any special occasion.",
    price: 85,
    category: "custom",
    color: "Purple",
    image: "/assets/purple-custom.jpg",
    featured: false,
  },
  {
    id: "yellow-heart-custom",
    name: "Custom Yellow Heart Frame",
    description:
      "Bright yellow satin roses in a heart formation with your choice of personalized text and date. A sunny and elegant keepsake in a white shadow box.",
    price: 85,
    category: "custom",
    color: "Yellow",
    image: "/assets/yellow-custom.jpg",
    featured: false,
  },
];

export const categories = [
  { value: "all", label: "All Products" },
  { value: "shadow-box", label: "Shadow Boxes" },
  { value: "heart-box", label: "Heart Boxes" },
  { value: "custom", label: "Custom Pieces" },
];

export const colors = ["All", "Red", "Blue", "Purple", "Yellow"];
