import { Link } from "react-router-dom";
import Error404Styled from "./Error404Styled";

const Error404 = (): JSX.Element => {
  return (
    <Error404Styled className="error">
      <img
        className="error__image__mobile"
        alt="Error 404. Page not found."
        src="img/error404-mobile.webp"
        width={350}
        height={520}
      />
      <img
        className="error__image__desktop"
        alt="Error 404. Page not found."
        src="img/error404-desktop.webp"
      />
      <Link to="/">
        <button className="error__button">Back to home page</button>
      </Link>
    </Error404Styled>
  );
};

export default Error404;
