export enum UiActionType {
  setIsLoading,
  unsetIsLoading,
  default,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface setIsLoadingAction extends UiAction {}

export interface unsetIsLoadingAction extends UiAction {}
