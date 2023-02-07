import { MealStructure } from "../data/types";

const urlApi = "https://api.edamam.com/api/recipes/v2?type=public&q=";
const urlApiKeysAndId =
  "&app_id=2822f4ca&app_key=1df7e7e8b83c3a663a8eb931ffc55658&imageSize=LARGE&random=true";

const getApiData = async (
  userInput: string = "Mediterranean"
): Promise<MealStructure> => {
  const response = await fetch(`${urlApi}${userInput}${urlApiKeysAndId}`);
  const mealsApi = await response.json();
  return mealsApi;
};

export default getApiData;
