import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ItemDetail from "./pages/ItemDetail";
import Cart from "./pages/Cart";
import AdminPage from "./pages/AdminPage";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/item/:itemId" component={ItemDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/adminPage" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
};
