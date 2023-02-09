import { useCallback, useContext } from "react";
import { ApiResponseStructure } from "../data/types";

import { loadMealsActionCreator } from "../store/actions/mealsActionCreators";
import MealsInfoContext from "../store/contexts/MealsInfoContext/MealsInfoContext";

export const useApi = () => {
  const { dispatch } = useContext(MealsInfoContext);

  const getApiData = useCallback(async () => {
    const listResponse = await fetch(
      `${process.env.REACT_APP_URL_API}${process.env.REACT_APP_URL_API_KEY}`
    );

    const result = (await listResponse.json()) as ApiResponseStructure;

    dispatch(loadMealsActionCreator(result.hits));
  }, [dispatch]);
  return { getApiData };
};
