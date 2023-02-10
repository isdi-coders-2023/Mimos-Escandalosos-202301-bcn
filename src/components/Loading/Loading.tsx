import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled aria-label="The page is loading" role="dialog">
      <span className="loader"></span>
    </LoadingStyled>
  );
};

export default Loading;
