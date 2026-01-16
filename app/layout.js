import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin);
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome/ The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located in the hear of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col `}
      >
        <Header />
        {/* Flex-1 means occupied the rest of the page */}
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl w-full mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
