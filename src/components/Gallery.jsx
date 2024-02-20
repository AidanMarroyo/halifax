import React from 'react';
import { BsPersonArmsUp } from 'react-icons/bs';
import { CiClock1, CiDumbbell } from 'react-icons/ci';

function Gallery() {
	return (
		<>
			{/* Features */}
			<div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
				{/* Grid */}
				<div className='mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8'>
					{/* Icon Block */}
					<div className='col-span-6 sm:col-span-4 flex flex-col items-center justify-center text-center'>
						<CiClock1 className='text-4xl md:text-5xl text-gray-800' />
						<div className='mt-2 sm:mt-6'>
							<h3 className='text-lg font-semibold text-gray-800'>
								24-Hour Access
							</h3>
						</div>
					</div>
					{/* End Icon Block */}
					{/* Icon Block */}
					<div className='col-span-6 sm:col-span-4 flex flex-col items-center justify-center text-center'>
						<CiDumbbell className='text-4xl md:text-5xl text-gray-800' />
						<div className='mt-2 sm:mt-6'>
							<h3 className='text-lg font-semibold text-gray-800'>
								State-of-the-Art Equipment
							</h3>
						</div>
					</div>
					{/* End Icon Block */}
					{/* Icon Block */}
					<div className='col-span-6 col-start-4 sm:col-span-4 flex flex-col items-center justify-center text-center'>
						<BsPersonArmsUp className='text-4xl md:text-5xl text-gray-800' />
						<div className='mt-2 sm:mt-6'>
							<h3 className='text-lg font-semibold text-gray-800'>
								Expert Trainers
							</h3>
						</div>
					</div>
					{/* End Icon Block */}
				</div>
				{/* End Grid */}
				{/* Grid */}
				<div className='mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-3 lg:gap-x-8'>
					<div className='hidden md:block col-span-4 md:col-span-3'>
						<img
							className='rounded-xl'
							src='/images/2.jpg'
							alt='Image Description'
						/>
					</div>
					{/* End Col */}
					<div className='col-span-4 md:col-span-3'>
						<img
							className='rounded-xl'
							src='/images/4.jpg'
							alt='Image Description'
						/>
					</div>
					{/* End Col */}
					<div className='col-span-4 md:col-span-3'>
						<img
							className='rounded-xl'
							src='/images/1.jpg'
							alt='Image Description'
						/>
					</div>

					{/* End Col */}
					<div className='col-span-4 md:col-span-3'>
						<img
							className='rounded-xl'
							src='/images/3.jpg'
							alt='Image Description'
						/>
					</div>
					{/* End Col */}
				</div>
				{/* End Grid */}
			</div>
			{/* End Features */}
		</>
	);
}

export default Gallery;
