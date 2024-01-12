import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                I asked my friends that why should someone hire Vaibhav? Here is
                what they replied!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                He possesses strong qualities that make him an excellent
                candidate. His high intellect and sharp problem-solving skills
                demonstrate his ability to tackle challenges effectively. His
                versatility makes him adaptable to any role . He is very
                consistent and ambitious.you wouldn't regret hiring him.
              </p>
            </div>
            <div className="right">
              <img
                src="./piyush.jpg"
                alt="image of customer"
                className="image"
              />
              <h1 className="name">Piyush</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                He's the most dedicated person in doing his work. He gives his
                best. He changes himself according to the situation and is able
                to perform his duties well. Not only hard work but his creative
                thinking is also one of the strengths.
              </p>
            </div>
            <div className="right">
              <img
                src="./kriti.jpg"
                alt="image of customer"
                className="image"
              />
              <h1 className="name">Kriti verma</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                Vaibhav should be hired because of his strong work ethics,
                positive attitude, and, notably, his loyalty to people.
              </p>
            </div>
            <div className="right">
              <img
                src="./bharti.jpg"
                alt="image of customer"
                className="image"
              />
              <h1 className="name">Aditya Bharti</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                He is hardworking, deeply understandable, possesses excellent
                analytical skills, finishes work on time, quickly acquires new
                skills, and is a consistent.
              </p>
            </div>
            <div className="right">
              <img
                src="./ayush.jpg"
                alt="image of customer"
                className="image"
              />
              <h1 className="name">Ayush</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <p>
                He's known for always working hard, staying focused on goals,
                and being resilient. He's smart, communicates well, and leads
                effectively in groups. His careful planning and creative
                thinking show he has a lot of potential for success.
              </p>
            </div>
            <div className="right">
              <img
                src="./shreya.jpg"
                alt="image of customer"
                className="image"
              />
              <h1 className="name">Shreya Bhardwaj</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <h3>Kaisa laga?</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <img src="./selection1.gif" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <img src="./selection2.webp" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="left">
              <img src="./salaryy.jpeg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
