import { FileAndFolderProvider } from "@/context/FileandFolderContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloud",
  description: "A Cloud Storage System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileAndFolderProvider>{children}</FileAndFolderProvider>
      </body>
    </html>
  );
}
