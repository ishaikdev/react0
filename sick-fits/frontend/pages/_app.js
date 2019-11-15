import App, { Container } from 'next/app';
import Page from '../components/Page';


//This is the initialization of the app on the port
//We create an app from NEXT.JS instead of creating directly from React.Component
//We do have the option to create a pure React Component on any route
//The <Component /> shown below will be the route or PAGE since we are using NEXT.JS
//Routing dictates that when we load in browser, the / path will be the component loaded on myApp
//And further components can be linekd and nested with the index.js page or '/' route in pages dir

//Page component is wrapping the inherited components, hence next step happens in Page component
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
