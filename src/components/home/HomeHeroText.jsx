import React from 'react'
import HomeVideo from './HomeVideo'

const HomeHeroText = () => {
    return (
        <div className='text-[10vw] leading-[8vw] pt-5 font-[font1] uppercase text-center tracking-tight'>
            <div className='flex-center'>L'étincelle</div>
            <div className='flex-center'>Qui <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden mb-6'><HomeVideo rad={50} /></div> génère</div>
            <div className='flex-center'>la créativité</div>
        </div>
    )
}

export default HomeHeroText
