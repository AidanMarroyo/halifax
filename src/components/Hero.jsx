'use client';
import { firestore, postToJSON } from '@/lib/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import kebabCase from 'lodash.kebabcase';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
function Hero() {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [employer, setEmployer] = useState('');
	const [consent, setConsent] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const slug = encodeURI(kebabCase(name));

	const createLead = async (e) => {
		e.preventDefault();

		const ref = doc(firestore, 'leads', slug);
		const mailRef = doc(firestore, 'mail', slug);
		const emails = [
			'aidanmarroyo@gmail.com',
			'south.halifax@anytimefitness.ca',
		];
		let data = {
			name,
			surname,
			email,
			number,
			employer,
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
			consent: serverTimestamp(),
		};

		const content = {
			subject: 'Halifax Anytime Fitness | New Member Lead',
			text: `A lead was made by, ${name} ${surname}. Their contact info is tel: ${number} and email: ${email}. Their employer is: ${employer}. ${name} has agreed to the Guest Waiver & Consent to Contact`,
		};

		const mailData = {
			to: emails,
			message: content,
		};

		await setDoc(ref, data);
		await setDoc(mailRef, mailData);
		setName('');
		setSurname('');
		setEmail('');
		setNumber('');
		setEmployer('');
		setConsent(null);
		toast.success('Form Submitted');
	};
	return (
		<>
			{/* Hero */}
			<div className='relative bg-gradient-to-bl from-rgb(116, 212, 212) via-rgb(230, 230, 230) '>
				<div className='max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto'>
					{/* Grid */}
					<div className='grid items-center md:grid-cols-2 gap-8 lg:gap-12'>
						<div>
							<p className='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-rgb(116, 212, 212) to-rgb(136, 216, 225) text-transparent dark:from-purple-700 dark:to-violet-800'>
								AF HALIFAX NOW OPEN
							</p>

							{/* Title */}
							<div className='mt-4 md:mb-12 max-w-2xl'>
								<h1 className='mb-4 font-moonregular text-gray-800 font-bold text-4xl lg:text-5xl '>
									Register Now to be added to our Waitlist for Discounted
									Membership Rates!
								</h1>
								<p className='text-gray-600 dark:text-gray-500'>
									Unlock special benefits and enjoy unbeatable rates by learning
									more below! Be among the first to experience state-of-the-art
									facilities, expert trainers, and a vibrant fitness community.
									Sign up now and secure your spot for a healthier, happier you.
									We will contact you within 24 hours!
								</p>
							</div>
							{/* End Title */}
						</div>
						{/* End Col */}
						<div>
							{/* Form */}
							<form onSubmit={createLead}>
								<div className='lg:max-w-lg lg:mx-auto lg:me-0 ms-auto'>
									{/* Card */}
									<div className='p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900'>
										<div className='text-center'>
											<h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
												Join Our Fitness Community!
											</h1>
										</div>
										<div className='mt-5'>
											<div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700'></div>
											{/* Grid */}
											<div className='grid grid-cols-2 gap-4'>
												{/* Input Group */}
												<div>
													{/* Floating Input */}
													<div className='relative'>
														<input
															type='text'
															value={name}
															onChange={(e) => setName(e.target.value)}
															required
															id='hs-hero-signup-form-floating-input-first-name'
															className='peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
															placeholder='John'
														/>
														<label
															htmlFor='hs-hero-signup-form-floating-input-first-name'
															className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
														>
															First name
														</label>
													</div>
													{/* End Floating Input */}
												</div>
												{/* End Input Group */}
												{/* Input Group */}
												<div>
													{/* Floating Input */}
													<div className='relative'>
														<input
															type='text'
															value={surname}
															onChange={(e) => setSurname(e.target.value)}
															required
															id='hs-hero-signup-form-floating-input-last-name'
															className='peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
															placeholder='Doe'
														/>
														<label
															htmlFor='hs-hero-signup-form-floating-input-last-name'
															className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
														>
															Last name
														</label>
													</div>
													{/* End Floating Input */}
												</div>
												{/* End Input Group */}
												{/* Input Group */}
												<div>
													{/* Floating Input */}
													<div className='relative'>
														<input
															type='email'
															value={email}
															onChange={(e) => setEmail(e.target.value)}
															required
															id='hs-hero-signup-form-floating-input-email'
															className='peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
															placeholder='you@email.com'
														/>
														<label
															htmlFor='hs-hero-signup-form-floating-input-email'
															className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
														>
															Email
														</label>
													</div>
													{/* End Floating Input */}
												</div>
												{/* End Input Group */}
												{/* Input Group */}
												<div>
													{/* Floating Input */}
													<div className='relative'>
														<input
															type='text'
															value={number}
															onChange={(e) => setNumber(e.target.value)}
															required
															id='hs-hero-signup-form-floating-input-phone'
															className='peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
															placeholder='Your Phone Number'
														/>
														<label
															htmlFor='hs-hero-signup-form-floating-input-phone'
															className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
														>
															Phone Number
														</label>
													</div>
													{/* End Floating Input */}
												</div>
												{/* End Input Group */}
												{/* Input Group */}
												<div>
													{/* Floating Input */}
													<div className='relative'>
														<input
															type='text'
															value={employer}
															onChange={(e) => setEmployer(e.target.value)}
															required
															id='hs-hero-signup-form-floating-input-company-name'
															className='peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
															placeholder='Preline'
														/>
														<label
															htmlFor='hs-hero-signup-form-floating-input-company-name'
															className='absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500'
														>
															Employer
														</label>
													</div>
													{/* End Floating Input */}
												</div>
												{/* End Input Group */}
												{/* Radio Input */}
												<div className='relative mt-4'>
													<input
														type='checkbox'
														value={consent}
														id='consent-checkbox'
														checked
														onChange={() => setIsModalOpen(!isModalOpen)} // Toggle the modal state
														className='peer border-gray-300 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
														required
													/>
													<label
														htmlFor='consent-checkbox'
														className='ml-2 text-sm text-gray-800 dark:text-white'
													>
														{' '}
														I acknowledge and accept the{' '}
														<span className='hover: cursor-pointer underline'>
															Terms & Conditions
														</span>{' '}
														of the Consent to Contact
													</label>
												</div>
												{/* Modal */}
												{isModalOpen && (
													<div className='fixed inset-0 z-50 flex items-center justify-center'>
														<div
															className='absolute inset-0 bg-black opacity-50'
															onClick={() => setIsModalOpen(false)}
														></div>
														<div className='relative bg-white p-8 rounded-lg'>
															{/* Modal content */}

															<h3 className='font-bold text-lg'>
																Consent to Contact
															</h3>
															<p className='py-4'>
																By acknowledging below, I verify this is my
																correct mobile phone number and/or email address
																and I consent to be contacted by Anytime
																Fitness, LLC, its affiliates, and/or its
																franchisees and their authorized designees,
																through email, telephone, text message, or by
																other means, some of which may be from an
																automated service, as well as any other
																communication described in our Privacy Policy,
																which can be found at:
																https://www.anytimefitness.com/privacy/. For
																mobile messaging, message and data rates apply
																and consent is not required to become a member.
																I also agree to the Terms and Conditions and the
																Privacy Policy.
															</p>
															<div className='modal-action'>
																<button
																	className='btn'
																	onClick={() => setIsModalOpen(false)}
																>
																	Close
																</button>
															</div>
														</div>
													</div>
												)}
												{/* End Modal */}
												{/* End Radio Input */}
											</div>
											{/* End Grid */}

											{/* Submit Button */}
											<div className='mt-4'>
												<button
													type='submit'
													className='w-full bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-500 hover:to-violet-400 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition duration-150 ease-in-out'
												>
													Pre-Register Now
												</button>
											</div>
											{/* End Submit Button */}
										</div>
									</div>
									{/* End Card */}
								</div>
							</form>
						</div>
						{/* End Col */}
					</div>
					{/* End Grid */}
				</div>
			</div>
			{/* End Hero */}
		</>
	);
}

export default Hero;
