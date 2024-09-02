import townhomes from '~/public/images/townhomes/townhomes-1.jpg'
import townhomes2 from '~/public/images/townhomes/townhomes-2.jpg'
import townhomes3 from '~/public/images/townhomes/townhomes-3.jpg'
import townhomes4 from '~/public/images/townhomes/townhomes-4.png'
import townhomes5 from '~/public/images/townhomes/townhomes-5.jpg'
import townhomes6 from '~/public/images/townhomes/townhomes-6.jpg'
import townhomes7 from '~/public/images/townhomes/townhomes-7.jpg'
import townhomes8 from '~/public/images/townhomes/townhomes-8.jpg'
import townhomes9 from '~/public/images/townhomes/townhomes-9.jpg'
import townhomes10 from '~/public/images/townhomes/townhomes-10.jpg'
import townhomes11 from '~/public/images/townhomes/townhomes-11.jpg'
import townhomes12 from '~/public/images/townhomes/townhomes-12.jpg'
import townhomes13 from '~/public/images/townhomes/townhomes-13.png'
import townhomes14 from '~/public/images/townhomes/townhomes-14.jpg'

import { Image } from '../Image'

export function TownhomesGrid() {
    return (
        <>
            <div className="mb-10">
                <p className="text-white text-sm">Offering 3 levels, programmed for the utmost convenience, this home
                    <br className="hidden md:inline-flex" /> has contemporary living and working at the forefront of its design.
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-6 gap-3">
                <Image
                    unoptimized
                    src={townhomes}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay="300"
                    className="col-span-4 row-span-2 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes2}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="400"
                    className="row-start-3 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes3}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-3 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes4}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="800"
                    className="row-start-3 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes5}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="1000"
                    className="row-start-3 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes6}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-4 col-span-2 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes7}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="700"
                    className="row-start-4 col-span-2 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes8}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-5 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes9}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="700"
                    className="row-start-5 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes10}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="800"
                    className="row-start-5 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes11}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="900"
                    className="row-start-5 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes12}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="600"
                    className="row-start-6 col-span-2 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes13}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="700"
                    className="row-start-6 size-full"
                />
                <Image
                    unoptimized
                    src={townhomes14}
                    alt="townhomes image"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="800"
                    className="row-start-6 size-full"
                />
            </div>
        </>
    )
}