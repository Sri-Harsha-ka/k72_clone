import React from 'react'

const Agency = () => {

	const images = [
		"https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"

	]

	return (
		<div>
			<div className='section1 bg-zinc-900'>
				<div className='absolute overflow-hidden bg-zinc-800 h-96 w-72 rounded-2xl top-80 left-[30vw] '>
					<img src={images[0]} alt="" />
				</div>
				<div className='relative'>
					<div className='text-center uppercase pt-[50vh] leading-[17vw] font-[font2] text-[19.5vw] tracking-wide'>
						Soixan7T <br /> TDouze
					</div>
				</div>
			</div>
			<div className='section2 h-screen'>

			</div>
		</div>
	)
}

export default Agency
