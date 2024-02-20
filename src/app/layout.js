import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Providers } from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'AF South Halifax',
	description: 'AF South Halifax',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
