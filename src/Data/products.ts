export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  link: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Soy Protein Shake – Vanilla",
    image: "https://via.placeholder.com/260x200.png?text=Soylent+Vanilla",
    price: 34.99,
    link: "https://www.amazon.com/",
  },
  {
    id: "2",
    title: "Soy Protein Shake – Chocolate",
    image: "https://via.placeholder.com/260x200.png?text=Soylent+Chocolate",
    price: 34.99,
    link: "https://www.amazon.com/",
  },
];
