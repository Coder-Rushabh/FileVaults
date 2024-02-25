import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./_components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FileVault",
  description: "Store and Share files with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>

    </html>
  );
}
