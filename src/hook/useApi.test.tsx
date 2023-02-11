import { renderHook, waitFor } from "@testing-library/react";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockDispatch, mockStore, uiMockStore } from "../mocks/mockStore";
import { useApi } from "./useApi";

const dispatch = mockDispatch;
const store = mockStore;
const uiStore = uiMockStore;

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
            <MockContextProvider mockStore={store} uiStore={uiStore}>
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
