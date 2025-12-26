import React from 'react'
import HomeVideo from '../components/home/HomeVideo'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
	return (
		<div>
			<div className='h-screen w-screen fixed'>
				<HomeVideo />
			</div>
			<div className='h-screen w-screen relative flex flex-col justify-between pb-3'>
				<HomeHeroText/>
				<HomeBottomText/>
			</div>
		</div>
	)
}

export default Home
