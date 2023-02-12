import { renderHook, waitFor } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import MockContextProvider from "../mocks/MockContextProvider";
import { mockDispatch, mockStore, uiMockStore } from "../mocks/mockStore";
import { server } from "../mocks/server";
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

  describe("When the response is a 404", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));
    test("Then it should not invoque the dispatch", async () => {
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

      expect(dispatch).not.toBeCalled();
    });
  });
});
