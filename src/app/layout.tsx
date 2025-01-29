import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "sonner";
import { ToastProvider } from "@/components/ui/toast";

const gluten = Gluten({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jolted Abstracts",
	description: "Open Edition Mint for Abstract Chain Art!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={gluten.className}>
				<ToastProvider>
					<Toaster position="bottom-center" />
					<ThirdwebProvider>{children}</ThirdwebProvider>
				</ToastProvider>
			</body>
		</html>
	);
}
