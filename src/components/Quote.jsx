import React from 'react';

function Quote() {
	return (
		<>
			{/* Testimonials */}
			<div className='relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
				{/* Blockquote */}
				<blockquote className='text-center lg:mx-auto lg:w-3/5'>
					<div>
						<p className='relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800'>
							<span className='relative z-10 italic text-gray-800 '>
								First <span className='underline text-violet-700'>100</span>{' '}
								members to join receive lowest ever rates & a free shaker
								bottle!
							</span>
						</p>
					</div>
				</blockquote>
				{/* End Blockquote */}
			</div>
			{/* End Testimonials */}
		</>
	);
}

export default Quote;
