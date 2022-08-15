import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./index.module.scss";
import { Container } from "@mantine/core";
import Image from "next/image";
import { Pagination, EffectFade, Autoplay } from "swiper";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      effect={"fade"}
      modules={[EffectFade, Pagination, Autoplay]}
      className={styles.swiper}
      autoplay={true}
    >
      <SwiperSlide>
        <div
          className="image-layer"
          style={{
            backgroundImage: 'url("/backgrounds/main-slider-1-1.jpg")',
          }}
        />
        <div className="main-slider__shape-1">
          <Image
            src="/shapes/main-slider-shape-1.png"
            width={472}
            height={467}
            alt=""
          ></Image>
        </div>
        <div className="main-slider__shape-2">
          <Image
            src="/shapes/main-slider-shape-2.png"
            width={496}
            height={497}
            alt=""
          ></Image>
        </div>
        <div className="main-slider__shape-3">
          <Image
            src="/shapes/main-slider-shape-3.png"
            width={405}
            height={122}
            alt=""
          ></Image>
        </div>
        <Container className="container">
          <div className="main-slider__content">
            <p>IT软件解决方案&</p>
            <h2>技术</h2>
            <div className="main-slider__btn-video-box">
              <div className="main-slider__btn-box">
                <a href="about.html" className="thm-btn main-slider__btn">
                  发现更多
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="image-layer"
          style={{
            backgroundImage: 'url("/backgrounds/main-slider-1-2.jpg")',
          }}
        />
        <div className="main-slider__shape-1">
          <Image
            src="/shapes/main-slider-shape-1.png"
            width={472}
            height={467}
            alt=""
          ></Image>
        </div>
        <div className="main-slider__shape-2">
          <Image
            src="/shapes/main-slider-shape-2.png"
            width={496}
            height={497}
            alt=""
          ></Image>
        </div>
        <div className="main-slider__shape-3">
          <Image
            src="/shapes/main-slider-shape-3.png"
            width={405}
            height={122}
            alt=""
          ></Image>
        </div>
        <Container className="container">
          <div className="main-slider__content">
            <p>IT软件解决方案&</p>
            <h2>技术</h2>
            <div className="main-slider__btn-video-box">
              <div className="main-slider__btn-box">
                <a href="about.html" className="thm-btn main-slider__btn">
                  发现更多
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export { Banner };
