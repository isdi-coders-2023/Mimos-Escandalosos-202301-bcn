import LoadingStyled from "./LoadingStyled";
import { SuperBalls } from "@uiball/loaders";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      className="loading-page"
      aria-label="The page is loading"
      role="dialog"
    >
      <SuperBalls />
    </LoadingStyled>
  );
};

export default Loading;
