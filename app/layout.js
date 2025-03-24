import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
	title: "Gem Creatives",
	description: "",
};

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
