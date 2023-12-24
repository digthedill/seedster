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