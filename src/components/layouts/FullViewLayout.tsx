import React from "react";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
const FullViewLayout = React.memo(() => {
  return <Outlet />;
});

export default FullViewLayout;
