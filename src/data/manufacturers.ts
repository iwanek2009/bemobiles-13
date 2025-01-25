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
        id: "iphone-16",
        name: "iPhone 16",
        slug: "iphone-16",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["128GB", "256GB", "512GB"],
          screenSize: "6.1-inch Super Retina XDR",
          camera: "48MP Main + 12MP Ultra Wide",
          battery: "Up to 20 hours video playback"
        },
        price: {
          monthly: 45.00,
          upfront: 199
        },
        releaseDate: "2024-09-20",
        popularity: 98
      },
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
          monthly: 35.00,
          upfront: 0
        },
        releaseDate: "2023-09-22",
        popularity: 95
      },
      // ... Additional iPhone models following the same structure
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
        id: "galaxy-s25",
        name: "Galaxy S25",
        slug: "galaxy-s25",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["256GB", "512GB"],
          screenSize: "6.8-inch Dynamic AMOLED 2X",
          camera: "200MP Main + 12MP Ultra Wide + 50MP Telephoto",
          battery: "5000mAh"
        },
        price: {
          monthly: 45.00,
          upfront: 199
        },
        releaseDate: "2025-01-17",
        popularity: 94
      },
      {
        id: "galaxy-s24-ultra",
        name: "Galaxy S24 Ultra",
        slug: "galaxy-s24-ultra",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["256GB", "512GB", "1TB"],
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
      },
      // ... Additional Samsung models following the same structure
    ]
  },
  {
    id: "google",
    name: "Google",
    slug: "google",
    logo: "google",
    description: "Experience pure Android with Google's Pixel phones, featuring exceptional camera capabilities and AI-powered features.",
    models: [
      {
        id: "pixel-9-pro",
        name: "Pixel 9 Pro",
        slug: "pixel-9-pro",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["128GB", "256GB", "512GB"],
          screenSize: "6.7-inch LTPO OLED",
          camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
          battery: "5000mAh"
        },
        price: {
          monthly: 38.00,
          upfront: 99
        },
        releaseDate: "2024-10-15",
        popularity: 88
      },
      // ... Additional Google models following the same structure
    ]
  },
  {
    id: "sony",
    name: "Sony",
    slug: "sony",
    logo: "sony",
    description: "Professional-grade smartphones with superior display and camera technology, perfect for content creators.",
    models: [
      {
        id: "xperia-1-vi",
        name: "Xperia 1 VI",
        slug: "xperia-1-vi",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["256GB", "512GB"],
          screenSize: "6.5-inch 4K HDR OLED",
          camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
          battery: "4500mAh"
        },
        price: {
          monthly: 35.00,
          upfront: 99
        },
        releaseDate: "2024-05-15",
        popularity: 82
      },
      // ... Additional Sony models following the same structure
    ]
  },
  {
    id: "honor",
    name: "Honor",
    slug: "honor",
    logo: "honor",
    description: "Innovative smartphones combining style with cutting-edge technology at competitive prices.",
    models: [
      {
        id: "honor-200-pro",
        name: "Honor 200 Pro",
        slug: "honor-200-pro",
        image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
        specs: {
          storage: ["256GB", "512GB"],
          screenSize: "6.8-inch OLED",
          camera: "108MP Main + 50MP Ultra Wide",
          battery: "5000mAh"
        },
        price: {
          monthly: 30.00,
          upfront: 49
        },
        releaseDate: "2024-03-15",
        popularity: 85
      },
      // ... Additional Honor models following the same structure
    ]
  }
];