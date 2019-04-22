import App, { Container } from "next/app";
import Page from "../components/Page";
import "isomorphic-fetch";

import { BACKEND_BASE_URL } from "../variables";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const res = await fetch(BACKEND_BASE_URL);
    const json = await res.json();

    //this exposes the query to user
    pageProps.query = ctx.query;
    pageProps.data = json;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Page {...pageProps}>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
