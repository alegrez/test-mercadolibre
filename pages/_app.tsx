import React from "react";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { SearchProvider } from "@/contexts/SearchContext";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    return (
        <>
            <SearchProvider>
                <NavBar />
                <Component {...pageProps} />
            </SearchProvider>
        </>
    )
}
