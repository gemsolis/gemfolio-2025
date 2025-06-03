import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ContactButton from "@/ui/buttons/ContactButton";

export const metadata = {
  title: "Abigael Gem | Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <ContactButton />
        <Footer />
      </body>
    </html>
  );
}
