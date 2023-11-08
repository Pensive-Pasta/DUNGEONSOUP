export const metadata = {
  title: "DUNGEONSOUP",
  description: "",
};

import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
