import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<nav className='grid grid-flow-col gap-4'>
				<Link href='/' className='link link-hover'>
					Home
				</Link>
				<Link href='/sign-in' className='link link-hover'>
					Sign In
				</Link>
			</nav>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<a
						style={{ fontSize: '1.5rem' }}
						href='https://www.instagram.com/anytimefitnesssouthhalifax/'
						target='_blank'
					>
						<FaInstagram />
					</a>
					<a
						style={{ fontSize: '1.5rem' }}
						href='https://www.facebook.com/AnytimeFitnessSouthHalifax'
						target='_blank'
					>
						<FaFacebook />
					</a>
				</div>
			</nav>
			<aside>
				<p>Copyright © 2023 - All rights reserved by AF South Halifax</p>
			</aside>
		</footer>
	);
}

export default Footer;
