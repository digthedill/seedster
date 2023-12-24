interface MealInterface {
    name: string;
    ingredients?: [string];
    description: string;
    images: {
      path: string;
      alt: string;
      width: number;
      height: number;
    };
    type: string; //possible enum candidate
    recipeLink?: string;
  }

  interface DogInterface {
    breed: string,
    age: number,
    name: string,
    description?: string
  }

  interface OrderInterface {
    sku: string
    title: string
    description: string
    location: {
      address: string
      city: string
      state: string
      zipcode: number
    }
  }