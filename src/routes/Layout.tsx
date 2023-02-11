import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { UiContext } from "../store/contexts/uiContext/UiContext";
import { useContext } from "react";

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
