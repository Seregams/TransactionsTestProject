import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../../routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {routes.map((route) =>
          route.children?.map((item) => (
            <Route path={item.path} element={item.element} key={item.path} />
          ))
        )}
      </Route>
    </Routes>
  );
};

export default AppRouter;
