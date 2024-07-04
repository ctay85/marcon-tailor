import Image from "next/image";
import penthouses from '~/public/images/penthouses-dark.png'
import penthouses2 from '~/public/images/penthouses-dark-2.png'
import penthouses3 from '~/public/images/penthouses-dark-3.png'
import penthouses4 from '~/public/images/penthouses-dark-4.png'
import penthouses5 from '~/public/images/penthouses-dark-5.png'

export function PenthousesGrid() {
    return (
        <>
            <div className="hidden sm:flex flex-col w-full gap-4">
                <div className="flex gap-4">
                    <Image src={penthouses} alt="penthouses image" className="w-[35%]" />
                    <Image src={penthouses2} alt="penthouses2 image" className="w-[65%]"/>
                </div>
                <div className="flex gap-4">
                    <Image src={penthouses3} alt="penthouses3 image" className="w-[35%]"/>
                    <Image src={penthouses4} alt="penthouses4 image" className="w-[35%]"/>
                    <Image src={penthouses5} alt="penthouses5 image" className="w-[35%]"/>
                </div>
            </div>

            <div className="sm:hidden flex flex-col gap-1">
                <div className="flex gap-1 flex-col"><Image src={penthouses} alt="penthouses image"/></div>
                <div className="flex gap-1 flex-col"><Image src={penthouses2} alt="penthouses2 image"/><Image src={penthouses3} alt="penthouses3 image"/></div>
                <div className="flex gap-1 flex-col"><Image src={penthouses4} alt="penthouses4 image"/><Image src={penthouses5} alt="penthouses5 image"/></div>
            </div>
        </>
    )
}