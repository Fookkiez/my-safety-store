"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-27 bg_green-4">
      <div className="container">
        <div className="flat-iconbox-v3">
          <div className="wrap-carousel wrap-mobile">
            <Swiper
              className="swiper tf-sw-mobile"
              spaceBetween={15}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 15 },
                480: { slidesPerView: 2, spaceBetween: 15 },
                0: { slidesPerView: 1, spaceBetween: 15 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd221" }}
            >
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box small text-center">
                  <div className="icon w-74 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 40 40"
                      fill="#fff"
                    >
                      <path d="M33.3282 18.4969C45.0922 3.87654 39.2002 -3.4337 29.1678 1.56943C16.7038 7.45361 -3.28072 30.4503 0.458686 37.8244C3.82012 44.2372 16.7062 34.3313 20.0625 31.6865C24.4212 28.2583 29.9401 22.8563 33.3282 18.4969ZM27.8263 4.96177C42.0668 -3.17576 38.0075 9.21276 31.861 16.5797H23.46V7.98112C24.9695 6.81809 26.4404 5.79701 27.8263 4.96177ZM19.2759 29.3156C14.5865 33.0599 10.287 36.0668 5.79187 37.3691C-3.01217 39.6766 6.98714 24.1684 12.1177 18.7536V26.7451C12.1177 27.3908 12.6416 27.9143 13.2877 27.9143H20.9459C20.3951 28.3884 19.8384 28.8555 19.2759 29.3156ZM23.5557 25.5759H14.4577V16.1844C16.6182 13.9057 18.8855 11.7601 21.1201 9.8721V17.7488C21.1201 18.3945 21.644 18.918 22.2901 18.918H29.9557C28.0546 21.1456 25.8849 23.4042 23.5557 25.5759ZM39.6062 21.4106C39.1494 20.954 38.4086 20.954 37.9516 21.4106L30.3922 28.9648C27.4082 27.8581 26.6236 29.4226 24.0561 31.9071C21.5809 34.2222 19.9052 35.9355 21.9568 38.7309C25.3091 41.824 27.5045 38.5016 29.2783 36.8125C31.6656 34.3903 33.1707 33.5008 32.0532 30.6118C39.3722 23.118 40.7458 22.7259 39.6062 21.4106ZM29.7173 33.067C29.491 33.2277 25.3093 37.6349 25.0963 37.5323C23.9392 37.9931 22.9593 36.6224 23.6338 35.6627C23.6824 35.5357 26.3482 32.9463 27.5255 31.7469C29.0815 29.8005 30.8453 31.8812 29.7173 33.067Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="title text_white">Protects Our Oceans</div>
                    <p className="text_white">
                      Pela donates a % of every sale to Ocean Cleanup <br />
                      and Preservation Initiatives.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box small text-center">
                  <div className="icon w-74 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 35 40"
                      fill="#fff"
                    >
                      <path
                        d="M17.333 33.3327H6.66653C4.46124 33.3327 2.66661 31.538 2.66661 29.3327V6.66653C2.66661 4.46124 4.46124 2.66661 6.66653 2.66661H22.6662C24.8715 2.66661 26.6661 4.46124 26.6661 6.66653V13.4131C26.6661 13.7667 26.8066 14.1058 27.0566 14.3559C27.3067 14.6059 27.6458 14.7464 27.9994 14.7464C28.353 14.7464 28.6922 14.6059 28.9422 14.3559C29.1923 14.1058 29.3327 13.7667 29.3327 13.4131V6.66653C29.3327 2.99061 26.3421 0 22.6662 0H6.66653C2.99061 0 0 2.99061 0 6.66653V29.3327C0 33.0087 2.99061 35.9993 6.66653 35.9993H17.333C17.6866 35.9993 18.0257 35.8588 18.2758 35.6088C18.5258 35.3587 18.6663 35.0196 18.6663 34.666C18.6663 34.3123 18.5258 33.9732 18.2758 33.7232C18.0257 33.4731 17.6866 33.3327 17.333 33.3327Z"
                        fill="white"
                      />
                      <path d="M7.99984 10.6665H17.333C17.6866 10.6665 18.0257 10.526 18.2758 10.2759C18.5258 10.0259 18.6663 9.68676 18.6663 9.33314C18.6663 8.97953 18.5258 8.6404 18.2758 8.39035C18.0257 8.14031 17.6866 7.99984 17.333 7.99984H7.99984C7.64622 7.99984 7.30709 8.14031 7.05705 8.39035C6.807 8.6404 6.66653 8.97953 6.66653 9.33314C6.66653 9.68676 6.807 10.0259 7.05705 10.2759C7.30709 10.526 7.64622 10.6665 7.99984 10.6665ZM20.4796 15.9997C20.4796 15.6461 20.3391 15.3069 20.0891 15.0569C19.839 14.8068 19.4999 14.6664 19.1463 14.6664H7.99984C7.64622 14.6664 7.30709 14.8068 7.05705 15.0569C6.807 15.3069 6.66653 15.6461 6.66653 15.9997C6.66653 16.3533 6.807 16.6924 7.05705 16.9425C7.30709 17.1925 7.64622 17.333 7.99984 17.333H19.1463C19.4999 17.333 19.839 17.1925 20.0891 16.9425C20.3391 16.6924 20.4796 16.3533 20.4796 15.9997ZM16.693 21.3329C16.693 20.9793 16.5525 20.6402 16.3025 20.3901C16.0524 20.1401 15.7133 19.9996 15.3597 19.9996H7.99984C7.64622 19.9996 7.30709 20.1401 7.05705 20.3901C6.807 20.6402 6.66653 20.9793 6.66653 21.3329C6.66653 21.6865 6.807 22.0256 7.05705 22.2757C7.30709 22.5257 7.64622 22.6662 7.99984 22.6662H15.3597C15.7133 22.6662 16.0524 22.5257 16.3025 22.2757C16.5525 22.0256 16.693 21.6865 16.693 21.3329ZM7.99984 25.3328C7.64622 25.3328 7.30709 25.4733 7.05705 25.7233C6.807 25.9734 6.66653 26.3125 6.66653 26.6661C6.66653 27.0197 6.807 27.3589 7.05705 27.6089C7.30709 27.859 7.64622 27.9994 7.99984 27.9994H14.7464C15.1 27.9994 15.4391 27.859 15.6892 27.6089C15.9392 27.3589 16.0797 27.0197 16.0797 26.6661C16.0797 26.3125 15.9392 25.9734 15.6892 25.7233C15.4391 25.4733 15.1 25.3328 14.7464 25.3328H7.99984ZM34.666 25.3328C34.666 20.9209 31.078 17.333 26.6661 17.333C22.2542 17.333 18.6663 20.9209 18.6663 25.3328C18.6663 27.6941 19.7009 29.8127 21.3329 31.2794V37.9952C21.3329 38.7339 21.7396 39.4112 22.3915 39.7605C23.0475 40.1125 23.8315 40.0739 24.4502 39.6619L26.6661 38.1739L28.8874 39.6645C29.1898 39.863 29.5401 39.9762 29.9015 39.9922C30.2628 40.0081 30.6218 39.9262 30.9405 39.7551C31.2591 39.5841 31.5257 39.3301 31.7121 39.0201C31.8985 38.7101 31.9977 38.3556 31.9993 37.9939V31.278C32.8376 30.5306 33.5084 29.6144 33.968 28.5897C34.4275 27.5649 34.6654 26.4559 34.666 25.3328ZM29.3327 36.7513L27.4101 35.4606C27.1904 35.3127 26.9316 35.2336 26.6668 35.2336C26.402 35.2336 26.1431 35.3127 25.9235 35.4606L24.0008 36.7513V32.866C24.8368 33.1633 25.7315 33.3327 26.6675 33.3327C27.6034 33.3327 28.4981 33.162 29.3341 32.866L29.3327 36.7513ZM26.6661 30.666C23.7248 30.666 21.3329 28.2741 21.3329 25.3328C21.3329 22.3915 23.7248 19.9996 26.6661 19.9996C29.6074 19.9996 31.9993 22.3915 31.9993 25.3328C31.9993 28.2741 29.6074 30.666 26.6661 30.666Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="title text_white">Inspired by Plants</div>
                    <p className="text_white">
                      Made from flax shive and a plant based biopolymer
                      <br />
                      create the base for our compostable cases.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box small text-center">
                  <div className="icon w-74 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 49 40"
                      fill="#fff"
                    >
                      <path
                        d="M0 22.8571V25.7143H21.8578L13.2864 40H35.4755L26.9041 25.7143H48.7619V22.8571H0ZM18.3327 37.1429L24.381 27.0624L30.4292 37.1429H18.3327ZM14.2857 5.71429C14.2857 2.56343 11.7223 0 8.57143 0C5.42057 0 2.85714 2.56343 2.85714 5.71429C2.85714 8.86514 5.42057 11.4286 8.57143 11.4286C11.7223 11.4286 14.2857 8.86514 14.2857 5.71429ZM8.57143 8.57143C6.996 8.57143 5.71429 7.28971 5.71429 5.71429C5.71429 4.13886 6.996 2.85714 8.57143 2.85714C10.1469 2.85714 11.4286 4.13886 11.4286 5.71429C11.4286 7.28971 10.1469 8.57143 8.57143 8.57143ZM17.1429 15.7143C17.1429 13.3511 15.2203 11.4286 12.8571 11.4286H4.28571C1.92257 11.4286 0 13.3511 0 15.7143V20H17.1429V15.7143ZM14.2857 17.1429H2.85714V15.7143C2.85714 14.9266 3.498 14.2857 4.28571 14.2857H12.8571C13.6449 14.2857 14.2857 14.9266 14.2857 15.7143V17.1429ZM45.9048 5.71429C45.9048 2.56343 43.3413 0 40.1905 0C37.0396 0 34.4762 2.56343 34.4762 5.71429C34.4762 8.86514 37.0396 11.4286 40.1905 11.4286C43.3413 11.4286 45.9048 8.86514 45.9048 5.71429ZM40.1905 8.57143C38.615 8.57143 37.3333 7.28971 37.3333 5.71429C37.3333 4.13886 38.615 2.85714 40.1905 2.85714C41.7659 2.85714 43.0476 4.13886 43.0476 5.71429C43.0476 7.28971 41.7659 8.57143 40.1905 8.57143ZM44.4762 11.4286H35.9048C33.5416 11.4286 31.619 13.3511 31.619 15.7143V20H48.7619V15.7143C48.7619 13.3511 46.8393 11.4286 44.4762 11.4286ZM45.9048 17.1429H34.4762V15.7143C34.4762 14.9266 35.1171 14.2857 35.9048 14.2857H44.4762C45.2639 14.2857 45.9048 14.9266 45.9048 15.7143V17.1429Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="title text_white">
                      100% Happiness Guarantee
                    </div>
                    <p className="text_white">
                      Enjoy free shipping worldwide, fast and secure checkout,{" "}
                      <br />
                      and hassle-free exchange and returns.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tf-icon-box small text-center">
                  <div className="icon w-74 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 35 40"
                      fill="#fff"
                    >
                      <path
                        d="M17.333 33.3327H6.66653C4.46124 33.3327 2.66661 31.538 2.66661 29.3327V6.66653C2.66661 4.46124 4.46124 2.66661 6.66653 2.66661H22.6662C24.8715 2.66661 26.6661 4.46124 26.6661 6.66653V13.4131C26.6661 13.7667 26.8066 14.1058 27.0566 14.3559C27.3067 14.6059 27.6458 14.7464 27.9994 14.7464C28.353 14.7464 28.6922 14.6059 28.9422 14.3559C29.1923 14.1058 29.3327 13.7667 29.3327 13.4131V6.66653C29.3327 2.99061 26.3421 0 22.6662 0H6.66653C2.99061 0 0 2.99061 0 6.66653V29.3327C0 33.0087 2.99061 35.9993 6.66653 35.9993H17.333C17.6866 35.9993 18.0257 35.8588 18.2758 35.6088C18.5258 35.3587 18.6663 35.0196 18.6663 34.666C18.6663 34.3123 18.5258 33.9732 18.2758 33.7232C18.0257 33.4731 17.6866 33.3327 17.333 33.3327Z"
                        fill="white"
                      />
                      <path d="M7.99984 10.6665H17.333C17.6866 10.6665 18.0257 10.526 18.2758 10.2759C18.5258 10.0259 18.6663 9.68676 18.6663 9.33314C18.6663 8.97953 18.5258 8.6404 18.2758 8.39035C18.0257 8.14031 17.6866 7.99984 17.333 7.99984H7.99984C7.64622 7.99984 7.30709 8.14031 7.05705 8.39035C6.807 8.6404 6.66653 8.97953 6.66653 9.33314C6.66653 9.68676 6.807 10.0259 7.05705 10.2759C7.30709 10.526 7.64622 10.6665 7.99984 10.6665ZM20.4796 15.9997C20.4796 15.6461 20.3391 15.3069 20.0891 15.0569C19.839 14.8068 19.4999 14.6664 19.1463 14.6664H7.99984C7.64622 14.6664 7.30709 14.8068 7.05705 15.0569C6.807 15.3069 6.66653 15.6461 6.66653 15.9997C6.66653 16.3533 6.807 16.6924 7.05705 16.9425C7.30709 17.1925 7.64622 17.333 7.99984 17.333H19.1463C19.4999 17.333 19.839 17.1925 20.0891 16.9425C20.3391 16.6924 20.4796 16.3533 20.4796 15.9997ZM16.693 21.3329C16.693 20.9793 16.5525 20.6402 16.3025 20.3901C16.0524 20.1401 15.7133 19.9996 15.3597 19.9996H7.99984C7.64622 19.9996 7.30709 20.1401 7.05705 20.3901C6.807 20.6402 6.66653 20.9793 6.66653 21.3329C6.66653 21.6865 6.807 22.0256 7.05705 22.2757C7.30709 22.5257 7.64622 22.6662 7.99984 22.6662H15.3597C15.7133 22.6662 16.0524 22.5257 16.3025 22.2757C16.5525 22.0256 16.693 21.6865 16.693 21.3329ZM7.99984 25.3328C7.64622 25.3328 7.30709 25.4733 7.05705 25.7233C6.807 25.9734 6.66653 26.3125 6.66653 26.6661C6.66653 27.0197 6.807 27.3589 7.05705 27.6089C7.30709 27.859 7.64622 27.9994 7.99984 27.9994H14.7464C15.1 27.9994 15.4391 27.859 15.6892 27.6089C15.9392 27.3589 16.0797 27.0197 16.0797 26.6661C16.0797 26.3125 15.9392 25.9734 15.6892 25.7233C15.4391 25.4733 15.1 25.3328 14.7464 25.3328H7.99984ZM34.666 25.3328C34.666 20.9209 31.078 17.333 26.6661 17.333C22.2542 17.333 18.6663 20.9209 18.6663 25.3328C18.6663 27.6941 19.7009 29.8127 21.3329 31.2794V37.9952C21.3329 38.7339 21.7396 39.4112 22.3915 39.7605C23.0475 40.1125 23.8315 40.0739 24.4502 39.6619L26.6661 38.1739L28.8874 39.6645C29.1898 39.863 29.5401 39.9762 29.9015 39.9922C30.2628 40.0081 30.6218 39.9262 30.9405 39.7551C31.2591 39.5841 31.5257 39.3301 31.7121 39.0201C31.8985 38.7101 31.9977 38.3556 31.9993 37.9939V31.278C32.8376 30.5306 33.5084 29.6144 33.968 28.5897C34.4275 27.5649 34.6654 26.4559 34.666 25.3328ZM29.3327 36.7513L27.4101 35.4606C27.1904 35.3127 26.9316 35.2336 26.6668 35.2336C26.402 35.2336 26.1431 35.3127 25.9235 35.4606L24.0008 36.7513V32.866C24.8368 33.1633 25.7315 33.3327 26.6675 33.3327C27.6034 33.3327 28.4981 33.162 29.3341 32.866L29.3327 36.7513ZM26.6661 30.666C23.7248 30.666 21.3329 28.2741 21.3329 25.3328C21.3329 22.3915 23.7248 19.9996 26.6661 19.9996C29.6074 19.9996 31.9993 22.3915 31.9993 25.3328C31.9993 28.2741 29.6074 30.666 26.6661 30.666Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <div className="title text_white">Inspired by Plants</div>
                    <p className="text_white">
                      Made from flax shive and a plant based biopolymer
                      <br />
                      create the base for our compostable cases.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd221" />
          </div>
        </div>
      </div>
    </section>
  );
}
