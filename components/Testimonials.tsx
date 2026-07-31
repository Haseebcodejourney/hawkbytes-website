"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "./Testimonials.css";

const ASSETS = {
  quoteIcon:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d30286ee799620b5c1f98f_quote-icon-2.avif",
  line: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d30e55885b7241c836468e_Line%2011.svg",
  lineMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dbdc6f2f3910576c1ab4ff_Line%2011-2.svg",
  bottomFx:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ebfdefd079daf6ba5c78c2_bottom-effects-2.avif",
};

const TESTIMONIALS = [
  {
    quote:
      "I have worked with HawkBytes across quantum research collaboration and AI product development. Without exception, they consistently exceeded expectations through deep technical talent and a practical approach to turning research into working software. They roll up their sleeves and help teams understand hard problems — not just deliver slides.",
    name: "Paul Lucidi",
    role: "Founder and President, CyberAge Consulting LLC",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/67d2f159313a2645eaaf7955_Testimonial-1.png",
  },
  {
    quote:
      "“I have used the HawkBytes team for critical AI product and software platform work. All of our engagements have exceeded expectations!”",
    name: "Craig Guinasso",
    role: "Senior Director, Technology & Product, Alector",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/67d2f1771e8b58d3dd539d57_Testimonial-2.png",
  },
  {
    quote:
      '"We have worked with HawkBytes on product engineering and applied research assessments. The team consistently produces high quality deliverables at fair prices. We give their client prospects our strongest recommendation."',
    name: "David Wise",
    role: "Managing Partner, Aberdeen Advisors",
    image:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb32/67d2f66f8447cb65cf548d91_Testimonial-3.png",
  },
];

/* Duplicate for a fuller carousel track (matches live site density) */
const SLIDES = [...TESTIMONIALS, ...TESTIMONIALS];

const ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 9 15"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6.77506 14.0463L1.48206 8.75332C1.10712 8.37827 0.896484 7.86965 0.896484 7.33932C0.896484 6.809 1.10712 6.30038 1.48206 5.92532L6.77506 0.632324L8.18906 2.04632L2.90006 7.33932L8.19306 12.6323L6.77506 14.0463Z"
      fill="currentColor"
    />
  </svg>
);

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressBars = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncNav = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    progressBars.current.forEach((bar) => {
      if (bar) bar.style.transform = "scaleX(0)";
    });
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="home_testimonials">
              <div className="home_testimonials-heading">
                <div className="align-left">
                  <p className="tagline-text-blue-gradient">TESTIMONIALS</p>
                  <h2 className="heading-style-48">Hear from Our Clients</h2>
                </div>

                <div className="slider-controls is-testimonials">
                  <div className="slider-pagination" aria-hidden="true">
                    <div className="swiper-number-current">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </div>
                    <div>/</div>
                    <div className="swiper-number-total">
                      {String(SLIDES.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="slider-arrows">
                    <button
                      type="button"
                      className={`square-button${isBeginning ? " swiper-button-disabled" : ""}`}
                      aria-label="Previous slide"
                      disabled={isBeginning}
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      <div className="slider-arrow-embed">{ARROW}</div>
                    </button>
                    <button
                      type="button"
                      className={`square-button is-next${isEnd ? " swiper-button-disabled" : ""}`}
                      aria-label="Next slide"
                      disabled={isEnd}
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <div className="slider-arrow-embed">{ARROW}</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="spacer-medium-30" />

              <div className="home_testimonials-slider-wr">
                <Swiper
                  modules={[Autoplay]}
                  className="swiper-t"
                  slidesPerView="auto"
                  speed={650}
                  rewind
                  autoplay={{
                    delay: AUTOPLAY_MS,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    syncNav(swiper);
                  }}
                  onSlideChange={syncNav}
                  onAutoplayTimeLeft={(swiper, _t, progressLeft) => {
                    const idx = swiper.activeIndex;
                    progressBars.current.forEach((el, i) => {
                      if (!el) return;
                      el.style.transform =
                        i === idx ? `scaleX(${1 - progressLeft})` : "scaleX(0)";
                    });
                  }}
                >
                  {SLIDES.map((item, index) => (
                    <SwiperSlide
                      key={`${item.name}-${index}`}
                      className="swiper-t-slide"
                    >
                      <div className="home_testimonials-card">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={ASSETS.quoteIcon}
                          loading="lazy"
                          width={40}
                          alt=""
                          className="home_testimonials-icon"
                        />
                        <div className="spacer-medium-10" />
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{item.quote}</p>
                        </div>
                        <div className="spacer-large-40" />
                        <div className="home_quote-author-wr is-testimonials">
                          <div className="home_quote-author-img-wr">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.image}
                              loading="lazy"
                              width={40}
                              alt=""
                              className="home_quote-author-img"
                            />
                          </div>
                          <div className="home_quote-author-info">
                            <div className="home_quote-author-name">
                              <p className="text-size-small-14">{item.name}</p>
                            </div>
                            <div className="hide-on-mobile">
                              <p className="text-color-light-grey text-size-small-14">
                                —
                              </p>
                            </div>
                            <div className="text-font-rm text-color-light-grey">
                              <p className="text-size-small-14">{item.role}</p>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-medium-20" />
                        <div className="home_testimonials-line-wr">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={ASSETS.line}
                            loading="lazy"
                            alt=""
                            className="home_testimonials-line-img"
                          />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={ASSETS.lineMob}
                            loading="lazy"
                            alt=""
                            className="home_testimonials-line-img is-mob"
                          />
                          <div className="progressbar-wr">
                            <div
                              ref={(el) => {
                                progressBars.current[index] = el;
                              }}
                              className="progressbar"
                            >
                              <div className="progressbar-blur" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="home_testimonials-slider-bg" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-bottom-img-wr is-on-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.bottomFx}
            loading="lazy"
            width={1180}
            alt=""
            className="section-bg-bottom-img is-on-top"
          />
        </div>
      </div>
    </section>
  );
}
