import Image from "next/image";
import townhomes from '~/public/images/townhomes-1.png'
import townhomes2 from '~/public/images/townhomes-2.png'
import townhomes3 from '~/public/images/townhomes-3.png'
import townhomes4 from '~/public/images/townhomes-4.png'
import townhomes5 from '~/public/images/townhomes-5.png'

import townhomes6 from '~/public/images/townhomes-6.png'
import townhomes7 from '~/public/images/townhomes-7.png'
import townhomes8 from '~/public/images/townhomes-8.png'
import townhomes9 from '~/public/images/townhomes-9.png'
import townhomes10 from '~/public/images/townhomes-10.png'

export function TownhomesGrid() {
    return (
        <>
            <div className=" hidden sm:flex flex-col w-full gap-4">
                <div className="flex gap-4">
                    <Image src={townhomes} alt="townhomes image" className="w-[60%]"/>
                    <Image src={townhomes2} alt="townhomes2 image" className="w-[40%]"/>
                </div>
                <div className="flex gap-4">
                    <Image src={townhomes3} alt="townhomes3 image" className="w-[35%]" />
                    <Image src={townhomes4} alt="townhomes4 image" className="w-[35%]"/>
                    <Image src={townhomes5} alt="townhomes5 image" className="w-[35%]"/>
                </div>
            </div>


            <div className="sm:hidden flex flex-col gap-1">
                <div className="flex gap-1"><Image src={townhomes6} alt="townhomes6 image" className="w-[100%]"/></div>
                <div className="flex gap-1"><Image src={townhomes7} alt="townhomes7 image" className="w-[100%]"/><Image src={townhomes8} alt="townhomes8 image" className="w-[100%]" /></div>
                <div className="flex gap-1"><Image src={townhomes9} alt="townhomes9 image" className="w-[100%]"/><Image src={townhomes10} alt="townhomes10 image" className="w-[100%]"/></div>
            </div>
        </>
    )
}