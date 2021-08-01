import React from 'react'
import Image from 'next/image'
import toTheStars from '../../../assets/images/landing-page/to-the-stars.svg'

export default function BlockTwo() {
  return (
    <div className="space-x-3">
        <h1 className="font-bold text-3xl text-center">Features loved by our users!</h1>
        <div className="flex justify-between px-16 space-x-3">
            <div className="text-center">
                <Image src={toTheStars} width="170" height="170" />
                <h2 className="text-secondary font-bold text-xl">Awesome Sticker</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...</p>
            </div>
            <div className="text-center">
                <Image src={toTheStars} width="170" height="170" />
                <h2 className="text-secondary font-bold text-xl">Awesome Sticker</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...</p>
            </div>
            <div className="text-center">
                <Image src={toTheStars} width="170" height="170" />
                <h2 className="text-secondary font-bold text-xl">Awesome Sticker</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur quaerat...</p>
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <button className="text-primary font-semibold border-2 rounded-3xl py-2 px-6 focus:ring-4 focus:ring-primary-light duration-300">BROWESE ALL FEATURES</button>
        </div>
    </div>
  )
}
