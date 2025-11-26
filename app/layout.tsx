import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import "./styles/main.scss";
import localFont from "next/font/local";

export const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  weight: "100 900",
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={montserrat.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
