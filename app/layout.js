export const metadata = {
  title: "DUNGEONSOUP",
  description: "",
};

import Navbar from "@/app/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
