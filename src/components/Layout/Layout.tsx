import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

import { useContext } from "react";
import Loading from "../Loading/Loading";
import { UiContext } from "../../store/contexts/uiContext/UiContext";

const Layout = () => {
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <Header />
      <main>
        {isLoading && <Loading />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
