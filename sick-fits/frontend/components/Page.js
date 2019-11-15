import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

//This is the wrapper injected into _app.js which overrides default app from next
// This component can be duplicated to create multiple themes
// This is the default theme, and further refactoring will be needed to support multiple themes as hotswaps

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
