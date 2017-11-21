import React from 'react';
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";

const Layout = props => (
  <Aux>
    <div>
      ToolBar, Drawer, BackDrop
    </div>
    <main className={classes.Container}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;