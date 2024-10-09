/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "../styles/prism-theme.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <div className="ml-0 md:ml-40 max-w-[620px]">
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>
      <nav className="mt-5 ml-0mb-10">
        <Nav/>
      </nav>
      <div className="p-3 mt-20 md:p-0">
        <main className="mb-auto min-h-screen pb-32">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Analytics />
          </QueryClientProvider>
        </main>
      </div>
    </div>
  );
}

export default MyApp;
