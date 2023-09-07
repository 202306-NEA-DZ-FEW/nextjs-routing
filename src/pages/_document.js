import Navbar from "@/components/Navbar/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Put navbar inside the document file to show it in all pages */}
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
