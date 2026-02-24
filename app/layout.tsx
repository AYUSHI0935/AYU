import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

export const metadata = {
  title: "My Website",
  description: "Modern Next.js Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">

        <Header />

        <main className="main-content">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}