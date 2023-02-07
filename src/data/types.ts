interface PaginationStructure {
  self: {
    href: string;
    title: string;
  };
}

interface ImageStructure {
  LARGE: {
    url: string;
  };
}

interface FATStructure {
  label: string;
  quantity: number;
  unit: string;
}

interface CHOCDFStructure {
  label: string;
  quantity: number;
  unit: string;
}

interface SUGARStructure {
  label: string;
  quantity: number;
  unit: string;
}

interface PROCNTStructure {
  label: string;
  quantity: number;
  unit: string;
}

interface CHOLEStructure {
  label: string;
  quantity: number;
  unit: string;
}

interface TotalNutrientsStructure {
  FAT: FATStructure;
  CHOCDF: CHOCDFStructure;
  SUGAR: SUGARStructure;
  PROCNT: PROCNTStructure;
  CHOLE: CHOLEStructure;
}
interface RecipeStructure {
  label: string;
  image: string;
  images: ImageStructure;
  ingredientLines: string[];
  calories: number;
  cuisineType: string[];
  totalNutrients: TotalNutrientsStructure;
}

interface MealStructure {
  _links: PaginationStructure;
  recipe: RecipeStructure;
}

export default MealStructure;
