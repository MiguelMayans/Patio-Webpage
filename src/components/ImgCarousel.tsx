import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function ImgCarousel() {
  return (
    <>
      <section className="mt-14" id="photos">
        <Swiper
          modules={[EffectFlip, Pagination, Navigation]}
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/niodbwhmzhouuepvi9ju"
              alt="Patatas y Batatas"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/zrkbkrqdh6gj8ypccrvf"
              alt="Bento Bowl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/cbundkf6t9qwfoftxlz8"
              alt="Dumplings Ibéricos"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/gllmnkyun3kqiiafjzvn"
              alt="Taco de Salmón"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/ynga7coxcmspxrykzirv"
              alt="Croquetas de Cecina y Trufa"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/o4loxpw5iqxbjfppcxag"
              alt="Cafés Patio"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/tqgc45mh85jmkxigycge"
              alt="Sony en la Barra"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
