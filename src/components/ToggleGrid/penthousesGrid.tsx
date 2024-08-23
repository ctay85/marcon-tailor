import penthouses from '~/public/images/penthouses/penthouses-1.jpg'
import penthouses2 from '~/public/images/penthouses/penthouses-2.jpg'
import penthouses3 from '~/public/images/penthouses/penthouses-3.png'
import penthouses4 from '~/public/images/penthouses/penthouses-4.jpg'
import penthouses5 from '~/public/images/penthouses/penthouses-5.jpg'
import penthouses6 from '~/public/images/penthouses/penthouses-6.jpg'
import penthouses7 from '~/public/images/penthouses/penthouses-7.jpg'
import penthouses8 from '~/public/images/penthouses/penthouses-8.jpg'
import penthouses9 from '~/public/images/penthouses/penthouses-9.jpg'

import { Image } from '../Image'

export function PenthousesGrid() {
    return (
        <>
            <div className="mb-10">
                <p className="text-white text-sm">Featuring wrap-around balconies and floor-to-ceiling windows, the penthouse homes at <br className="hidden md:inline-flex" /> Tailor offer sweeping views of Brentwood´s skyline and the North Shore mountains.
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-5 gap-3">
                <video autoPlay={true}
                    muted={true}
                    playsInline
                    className="object-cover size-full col-span-4 row-span-2"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="300">
                    <source src={"/videos/Tailor_00011.mp4"} type="video/mp4" />
                </video>
                <Image
                    src={penthouses}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="400"
                    className="row-start-3 size-full"
                />
                <Image
                    src={penthouses2}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="500"
                    className="row-start-3 size-full"
                />
                <Image
                    src={penthouses3}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-3 col-span-2 size-full"
                />
                <Image
                    src={penthouses4}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-4 col-span-2 size-full"
                />
                <Image
                    src={penthouses5}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="700"
                    className="row-start-4 size-full"
                />
                <Image
                    src={penthouses6}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="800"
                    className="row-start-4 size-full"
                />
                <Image
                    src={penthouses7}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-5 col-span-2 size-full"
                />
                <Image
                    src={penthouses8}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="700"
                    className="row-start-5 size-full"
                />
                <Image
                    src={penthouses9}
                    alt="penthouses image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="800"
                    className="row-start-5 size-full"
                />
            </div>
        </>
    )
}