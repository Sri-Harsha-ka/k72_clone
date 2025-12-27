import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Agency = () => {

	const imageDivRef = useRef(null)
	const imageRef = useRef(null)

	const images = [
		"https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
		"https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
		'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
		'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
		'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
		'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
		'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
		'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
	]

	useGSAP(() => {

		gsap.to(imageDivRef.current, {
			y:800,
			duration:5,
			ease:'power1.inOut',
			scrollTrigger: {
				trigger: imageDivRef.current,
				start: "top 25%",
				end: "top -60%",
				markers: true,
				scrub: 0.5,
				// pin: true,
				// pinSpacing: true,
				// anticipatePin: 1,
				onUpdate: (e) => {
					
					const imageIndex = Math.min(images.length - 1, Math.floor(e.progress * images.length));
					console.log(imageDivRef);
					

					imageRef.current.src = images[imageIndex];

				}

			}
		})

	})



	return (
		<div>
			<div className='section1 bg-zinc-900'>
				<div ref={imageDivRef} className='absolute overflow-hidden bg-zinc-800 h-96 w-72 rounded-2xl top-80 left-[30vw] '>
					<img ref={imageRef} src={images[0]} alt="" />
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
