import { renderHook, waitFor } from "@testing-library/react";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockDispatch, mockStore } from "../mocks/mockStore";
import { useApi } from "./useApi";

const dispatch = mockDispatch;
const store = mockStore;

describe("Given the custom hook useApi()", () => {
  describe("When it is called", () => {
    test("Then dispatch should be invoqued", async () => {
      const {
        result: {
          current: { getApiData },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await waitFor(async () => getApiData());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
