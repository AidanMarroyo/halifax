import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import Image from 'next/image';

export default function Home() {
	return (
		<main
			style={{
				background: 'linear-gradient(45deg, rgb(230, 230, 230))',
			}}
		>
			<Quote />
			<Hero />

			<Gallery />
		</main>
	);
}
