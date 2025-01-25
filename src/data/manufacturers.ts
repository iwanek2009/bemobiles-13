import { Manufacturer } from "@/types/phones";

export const manufacturers: Manufacturer[] = [
  {
    id: "apple",
    name: "Apple",
    slug: "apple",
    logo: "apple",
    description: "Experience innovation with Apple's premium iPhone range, featuring cutting-edge technology and seamless integration with the Apple ecosystem.",
    models: [
      {
        id: "iphone-15",
        name: "iPhone 15",
        slug: "iphone-15",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["128GB", "256GB", "512GB"],
          screenSize: "6.1-inch Super Retina XDR",
          camera: "48MP Main + 12MP Ultra Wide",
          battery: "Up to 20 hours video playback"
        },
        price: {
          monthly: 30.00,
          upfront: 0
        },
        releaseDate: "2023-09-22",
        popularity: 95
      },
      {
        id: "iphone-14",
        name: "iPhone 14",
        slug: "iphone-14",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["128GB", "256GB", "512GB"],
          screenSize: "6.1-inch Super Retina XDR",
          camera: "12MP Main + 12MP Ultra Wide",
          battery: "Up to 20 hours video playback"
        },
        price: {
          monthly: 27.00,
          upfront: 0
        },
        releaseDate: "2022-09-16",
        popularity: 88
      }
    ]
  },
  {
    id: "samsung",
    name: "Samsung",
    slug: "samsung",
    logo: "samsung",
    description: "Discover Samsung's diverse range of smartphones, from premium Galaxy S series to innovative foldables.",
    models: [
      {
        id: "galaxy-s24",
        name: "Galaxy S24",
        slug: "galaxy-s24",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["256GB", "512GB"],
          screenSize: "6.8-inch Dynamic AMOLED 2X",
          camera: "200MP Main + 12MP Ultra Wide + 50MP Telephoto",
          battery: "5000mAh"
        },
        price: {
          monthly: 43.00,
          upfront: 0
        },
        releaseDate: "2024-01-17",
        popularity: 92
      }
    ]
  }
];