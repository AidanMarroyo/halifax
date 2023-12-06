'use client';
import { auth, firestore } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				router.push('/master-list');
				toast.success('Logged in successfully'); // this line
			})
			.catch((error) => {
				console.error('Error signing in:', error);
				toast.error('Error signing in: ' + error.message); // and this line
			});
	};
	const logOut = () => {
		signOut(auth);
	};
	return (
		<main className='w-full max-w-md mx-auto p-6'>
			<div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
				<div className='p-4 sm:p-7'>
					<div className='text-center'>
						<h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
							Sign in
						</h1>

						<div className='grid gap-y-4 '>
							{/* Form Group */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm mb-2 dark:text-white'
								>
									Email address
								</label>
								<div className='relative'>
									<input
										type='email'
										id='email'
										name='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
										aria-describedby='email-error'
									/>
									<div className='hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
										<svg
											className='h-5 w-5 text-red-500'
											width={16}
											height={16}
											fill='currentColor'
											viewBox='0 0 16 16'
											aria-hidden='true'
										>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
										</svg>
									</div>
								</div>
								<p
									className='hidden text-xs text-red-600 mt-2'
									id='email-error'
								>
									Please include a valid email address so we can get back to you
								</p>
							</div>
							{/* End Form Group */}
							{/* Form Group */}
							<div>
								<div className='flex justify-between items-center'>
									<label
										htmlFor='password'
										className='block text-sm mb-2 dark:text-white'
									>
										Password
									</label>
									<a
										className='text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
										href='../examples/html/recover-account.html'
									>
										Forgot password?
									</a>
								</div>
								<div className='relative'>
									<input
										type='password'
										id='password'
										name='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
										aria-describedby='password-error'
									/>
									<div className='hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3'>
										<svg
											className='h-5 w-5 text-red-500'
											width={16}
											height={16}
											fill='currentColor'
											viewBox='0 0 16 16'
											aria-hidden='true'
										>
											<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
										</svg>
									</div>
								</div>
								<p
									className='hidden text-xs text-red-600 mt-2'
									id='password-error'
								>
									8+ characters required
								</p>
							</div>
							{/* End Form Group */}

							<button
								type='button'
								className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
								onClick={login}
							>
								Sign in
							</button>
						</div>

						{/* End Form */}
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignIn;