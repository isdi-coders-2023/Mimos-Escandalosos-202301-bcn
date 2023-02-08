import { useCallback, useContext } from "react";
import MealsInfoContext from "../contexts/MealsInfoContext/MealsInfoContext";
import { MealsStructure } from "../data/types";
import { loadMealsActionCreator } from "../store/actions/mealsActionCreators";

export const useApi = () => {
  const { dispatch } = useContext(MealsInfoContext);

  const getApiData = useCallback(
    async (url: string) => {
      const listResponse = await fetch(url);

      const result = (await listResponse.json()) as MealsStructure;

      dispatch(loadMealsActionCreator(result));
    },
    [dispatch]
  );
  return { getApiData };
};
