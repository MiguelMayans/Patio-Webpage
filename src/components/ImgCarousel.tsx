import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function ImgCarousel() {
  return (
    <>
      <section className="mt-14">
        <Swiper
          modules={[EffectFlip, Pagination, Navigation]}
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/niodbwhmzhouuepvi9ju" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/zrkbkrqdh6gj8ypccrvf" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/cbundkf6t9qwfoftxlz8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/gllmnkyun3kqiiafjzvn" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/ynga7coxcmspxrykzirv" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/o4loxpw5iqxbjfppcxag" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/tqgc45mh85jmkxigycge" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
