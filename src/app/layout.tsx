import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "sonner";
import { ToastProvider } from "@/components/ui/toast";

const gluten = Gluten({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NonFroggableToads",
	description: "4,444 Rare Poison Dart Frogs ready to be discovered!",
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
