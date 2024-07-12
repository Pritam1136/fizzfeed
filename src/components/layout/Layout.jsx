import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/protected")) {
      console.log("Protected route");
    }
  }, [pathname]);

  return (
    <>
      This is the child : <Outlet />
    </>
  );
}
