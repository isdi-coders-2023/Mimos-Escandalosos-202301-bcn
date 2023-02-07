export interface MealStructure {
  hits: [
    {
      recipe: {
        label: string;
        image: string;
        images: {
          SMALL: {
            url: string;
          };
        };
        ingredientLines: string[];
        calories: number;
        cuisineType: string[];
        totalNutrients: {
          FAT: {
            label: string;
            quantity: number;
            unit: string;
          };
          CHOCDF: {
            label: string;
            quantity: number;
            unit: string;
          };
          SUGAR: {
            label: string;
            quantity: number;
            unit: string;
          };
          PROCNT: {
            label: string;
            quantity: number;
            unit: string;
          };
          CHOLE: {
            label: string;
            quantity: number;
            unit: string;
          };
        };
      };
    }
  ];
}

export type MealsStructure = MealStructure[];

export interface ButtonProps {
  className: string;
  action: () => void;
}
