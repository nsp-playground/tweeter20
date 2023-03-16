import Document, { Html, Head, Main, NextScript } from "next/document";
import fs from "fs";

const version = JSON.parse(fs.readFileSync("package.json")).version;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, version };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__APP_VERSION__ = '${this.props.version}'`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
