import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      className="loading-page"
      aria-label="The page is loading"
      role="dialog"
    >
      <div className="superballs">
        <span className="superballs__dot"></span>
        <span className="superballs__dot"></span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
