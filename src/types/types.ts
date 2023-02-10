export interface PaginationStructure {
  self: {
    href: string;
    title: string;
  };
}

export interface ImageStructure {
  LARGE: {
    url: string;
  };
}

export interface FATStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOCDFStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface SUGARStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface PROCNTStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface CHOLEStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalNutrientsStructure {
  fat: FATStructure;
  carbs: CHOCDFStructure;
  sugar: SUGARStructure;
  proteins: PROCNTStructure;
  colesterol: CHOLEStructure;
}

export interface RecipeStructure {
  label: string;
  image: string;
  images: ImageStructure;
  ingredientLines: string[];
  calories: number;
  cuisineType: string[];
  totalNutrients: TotalNutrientsStructure;
  uri: string;
}

export interface MealStructure {
  recipe: RecipeStructure;
}

export type MealsStructure = MealStructure[];

export interface ApiResponseStructure {
  count: number;
  front: number;
  hits: MealsStructure;
}
