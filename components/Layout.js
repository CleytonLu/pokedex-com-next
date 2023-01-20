import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>Pokédex</title>
        </Head>
            <Navbar />
                <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}