import { useCallback, useContext } from "react";
import { ApiResponseStructure } from "../types/types";

import MealsInfoContext from "../store/contexts/MealsInfoContext/MealsInfoContext";
import { loadMealsActionCreator } from "../store/actions/mealsAction/mealsActionCreators";
import { UiContext } from "../store/contexts/uiContext/UiContext";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/actions/uiAction/uiActionCreators";

export const useApi = () => {
  const { dispatch } = useContext(MealsInfoContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const getApiData = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());

      const listResponse = await fetch(
        `${process.env.REACT_APP_URL_API}${process.env.REACT_APP_URL_API_KEY}`
      );

      const result = (await listResponse.json()) as ApiResponseStructure;

      uiDispatch(unsetIsLoadingActionCreator());
      dispatch(loadMealsActionCreator(result.hits));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);
  return { getApiData };
};
