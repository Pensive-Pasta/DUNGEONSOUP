export const metadata = {
  title: "DUNGEONSOUP",
  description: "",
};

import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
