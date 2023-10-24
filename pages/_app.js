import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>My Recipes</title>
        <meta
          name="description"
          content="Explore food from around the world..."
        />
        
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
