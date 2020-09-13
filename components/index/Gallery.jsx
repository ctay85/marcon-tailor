
// Dependencies
import Link from 'next/link'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//
SwiperCore.use([ Pagination ])

// Component
const Gallery = () => (
  <section className="page__index__gallery bg--dark-blue">
    <div className="wrap--reg">

      <div className="masthead">
        <h2>Tailor Made for Brentwood</h2>

        <aside>
          <p className="text--display">The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon.</p>

          <Link href=""><a className="btn btn--text btn--white btn--line-hover">Learn More</a></Link>
        </aside>
      </div>

      <Swiper
        slidesPerView={ 2 }
        pagination={{ type : 'progressbar' }}
        speed={ 500 }
      >
        <SwiperSlide>
          <img src="/img/index/B&TB_MARCON_TAILOR_INT_LOBBY_HALL_NEW_FINAL_1920x1920.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/index/B&TB_MARCON_TAILOR_LOBBY_CORNER_FINAL_1920x1920.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/index/B&TB_MARCON_TAILOR_LOBBY_ENTRANCE_FINAL_1920x1920.jpg" />
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
)

// Export
export default Gallery
