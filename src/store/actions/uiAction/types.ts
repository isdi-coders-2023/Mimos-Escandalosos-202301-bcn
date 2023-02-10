export enum UiActionType {
  setIsLoading,
  unsetIsLoading,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface setIsLoadingAction extends UiAction {}

export interface unsetIsLoadingAction extends UiAction {}
