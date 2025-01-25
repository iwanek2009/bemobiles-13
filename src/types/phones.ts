export interface PhoneModel {
  id: string;
  name: string;
  slug: string;
  image: string;
  specs: {
    storage: string[];
    screenSize: string;
    camera: string;
    battery: string;
  };
  price: {
    monthly: number;
    upfront: number;
  };
  releaseDate: string;
  popularity: number;
}

export interface Manufacturer {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  models: PhoneModel[];
}