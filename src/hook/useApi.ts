import { useCallback, useContext } from "react";
import { ApiResponseStructure } from "../types/types";

import MealsInfoContext from "../store/contexts/MealsInfoContext/MealsInfoContext";
import { loadMealsActionCreator } from "../store/actions/mealsAction/mealsActionCreators";

export const useApi = () => {
  const { dispatch } = useContext(MealsInfoContext);

  const getApiData = useCallback(async () => {
    try {
      const listResponse = await fetch(
        `${process.env.REACT_APP_URL_API}${process.env.REACT_APP_URL_API_KEY}`
      );

      const result = (await listResponse.json()) as ApiResponseStructure;

      dispatch(loadMealsActionCreator(result.hits));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);
  return { getApiData };
};
