import NotFoundUrl from "@/components/common/NotFoundUrl";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NotFoundUrl
          message={"Could not find the requested page."}
          title={"Not found"}
          buttonMessage={"Go to home page"}
        />
      </body>
    </html>
  );
}
