import React from 'react';

function Banner() {
	return (
		<>
			{/* Announcement Banner */}
			<a
				className='group block  p-4 rounded-lg text-center transition-all duration-300 '
				href='#'
			>
				<div className='max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto'>
					<p className='me-2 inline-block text-sm text-gray-800'>
						Be in the first 100 to sign up and snag a free shaker bottle!
					</p>
				</div>
			</a>
			{/* End Announcement Banner */}
		</>
	);
}

export default Banner;
