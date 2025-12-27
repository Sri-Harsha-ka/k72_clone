import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLocation } from 'react-router-dom'

const PageChange = (props) => {

    const loc = useLocation().pathname;
    const stairs = useRef(null)
    const pageRef = useRef(null)


    useGSAP(() => {

        gsap.set(stairs.current, { display: 'block' })
        gsap.set('.stair', { y: '0%', height: '100%' })

        const tl = gsap.timeline()

        tl.from(".stair", {
            height: 0,
            duration: 0.5,
            stagger: -0.1,
            ease: "steps(40)"
        })
        tl.to(".stair", {
            y: '100%',
            delay: 0.2,
            stagger: 0.1,
            ease: "expo.out"
        })
        tl.to(stairs.current, {
            display: 'none'
        })

        gsap.from(pageRef.current,{
            opacity: 0,
            delay:1,
            scale:1.5
        })

        return () => tl.kill()
    }, [loc])

    return (
        <div>
            <div ref={stairs} className='h-screen w-full fixed z-20 top-0 left-0 pointer-events-none' style={{ display: 'none' }}>
                <div className='flex h-full w-full'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default PageChange
