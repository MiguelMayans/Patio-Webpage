import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const imagesArr = [
  "https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/niodbwhmzhouuepvi9ju",
  "https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/tfuv6sxgq53cnd2eyxpm",
  "https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/llotrpxgimt4rrbgtvgi",
  "https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/suaolckllz77ty1hd52u",
  "https://res.cloudinary.com/du13ofsms/image/upload/f_auto,q_auto/v1/Patio-Webpage/ajvlk0zcasp0obetjkuv",
];

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
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
