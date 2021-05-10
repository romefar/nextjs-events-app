import React, { Fragment } from 'react';
import Header from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
