import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<nav className='grid grid-flow-col gap-4'>
				<a className='link link-hover'>About us</a>
				<a className='link link-hover'>Jobs</a>
			</nav>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<a style={{ fontSize: '1.5rem' }}>
						<FaInstagram />
					</a>
					<a style={{ fontSize: '1.5rem' }}>
						<FaFacebook />
					</a>
				</div>
			</nav>
			<aside>
				<p>Copyright © 2023 - All rights reserved by AF Halifax</p>
			</aside>
		</footer>
	);
}

export default Footer;
