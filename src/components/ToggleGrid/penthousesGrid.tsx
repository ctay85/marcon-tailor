import penthouses from '~/public/images/penthouses-dark.png'
import penthouses2 from '~/public/images/penthouses-dark-2.png'
import penthouses3 from '~/public/images/penthouses-dark-3.png'
import penthouses4 from '~/public/images/penthouses-dark-4.png'
import penthouses5 from '~/public/images/penthouses-dark-5.png'
import { Image } from '../Image'

export function PenthousesGrid() {
    return (
        <>
            <div className="hidden sm:flex flex-col w-full gap-3">
                <div className="flex gap-3 w-full">
                    <Image
                        src={penthouses}
                        alt="penthouses image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        className="w-[30%]"
                    />
                    <Image
                        src={penthouses2}
                        alt="penthouses2 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="300"
                        quality={100}
                        className="w-[70%]"
                    />
                </div>
                <div className="flex gap-3 w-full">
                    <Image
                        src={penthouses3}
                        alt="penthouses3 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                        className="w-[30%]"
                    />
                    <Image
                        src={penthouses4}
                        alt="penthouses4 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="600"
                        className="w-[40%]"
                    />
                    <Image
                        src={penthouses5}
                        alt="penthouses5 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="700"
                        className="w-[29%]"
                    />
                </div>
            </div>

            <div className="sm:hidden flex flex-col gap-1">
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses}
                        alt="penthouses image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="900"
                    />
                </div>
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses2}
                        alt="penthouses2 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="1100"
                    />
                    <Image
                        src={penthouses3}
                        alt="penthouses3 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="1300"
                    />
                </div>
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses4}
                        alt="penthouses4 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="1500"
                    />
                    <Image
                        src={penthouses5}
                        alt="penthouses5 image"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="1700"
                        className="w-full"
                    />
                </div>
            </div>
        </>
    )
}