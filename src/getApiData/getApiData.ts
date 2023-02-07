import MealStructure from "../data/types";

const getApiData = async () => {
  const listResponse = await fetch(
    `
  ${process.env.REACT_APP_URL_API}${process.env.REACT_APP_URL_API_KEY}`
  );

  const result = (await listResponse.json()) as MealStructure;

  return result;
};

export default getApiData;
