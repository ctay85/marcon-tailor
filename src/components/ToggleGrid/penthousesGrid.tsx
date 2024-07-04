import penthouses from '~/public/images/penthouses-dark.png'
import penthouses2 from '~/public/images/penthouses-dark-2.png'
import penthouses3 from '~/public/images/penthouses-dark-3.png'
import penthouses4 from '~/public/images/penthouses-dark-4.png'
import penthouses5 from '~/public/images/penthouses-dark-5.png'
import { Image } from '../Image'

export function PenthousesGrid() {
    return (
        <>
            <div className="hidden sm:flex flex-col w-full gap-4">
                <div className="flex gap-4">
                    <Image
                        src={penthouses}
                        alt="penthouses image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        className="w-[35%]"
                    />
                    <Image
                        src={penthouses2}
                        alt="penthouses2 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        className="w-[65%]"
                    />
                </div>
                <div className="flex gap-4">
                    <Image
                        src={penthouses3}
                        alt="penthouses3 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                        className="w-[35%]"
                    />
                    <Image
                        src={penthouses4}
                        alt="penthouses4 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="800"
                        className="w-[35%]"
                    />
                    <Image
                        src={penthouses5}
                        alt="penthouses5 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1000"
                        className="w-[35%]"
                    />
                </div>
            </div>

            <div className="sm:hidden flex flex-col gap-1">
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses}
                        alt="penthouses image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1200"
                    />
                </div>
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses2}
                        alt="penthouses2 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1400"
                    />
                    <Image
                        src={penthouses3}
                        alt="penthouses3 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1600"
                    />
                </div>
                <div className="flex gap-1 flex-col">
                    <Image
                        src={penthouses4}
                        alt="penthouses4 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="1800"
                    />
                    <Image
                        src={penthouses5}
                        alt="penthouses5 image"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="2000"
                    />
                </div>
            </div>
        </>
    )
}