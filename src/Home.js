import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Autoplay, } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Home.css';
import Product from './Product';


SwiperCore.use([Navigation, Scrollbar, Autoplay,]);


function Home() {


  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="home__image" src={`https://picsum.photos/id/${i + 1}/1400/400`} alt={`Slide ${i}`} style={{ listStyle: 'none' }} />
      </SwiperSlide>
    );
  }

  return (
    <div className="home">
      <React.Fragment>
        <Swiper tag="section" wrapperTag="ul" onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')} navigation autoplay={{ delay: 10000 }} fadeEffect={
            { crossFade: false }} id="main">
          {slides}
        </Swiper>
      </React.Fragment>


      {/*product */}
      <div className="home__row">
        <Product
          image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
          id="5471113"
          title="All new Sony led High resolution laptop"
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={5}
        />
        <Product
          image="https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UY218_.jpg"
          id="5472823"
          title="white all in one back bone jeans pants "
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={5}
        />

      </div>
      <div className="home__row">

        <Product
          image="https://m.media-amazon.com/images/I/71DaQ69UtYL._AC_UY218_.jpg"
          id="5472812"
          title="Mybody Dog collor help you pet feel safe and fine "
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={4}
        />
        <Product
          image="https://m.media-amazon.com/images/I/71nwoBYhnKL._AC_UL320_.jpg"
          id="5472813"
          title="rolipoli donut shop brand tshirt 2 for 25"
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={5}
        />
        <Product
          image="https://m.media-amazon.com/images/I/71lZ+V+BqVL._AC_UL320_.jpg"
          id="5472813"
          title="custom design blanket perfect for the winter "
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={5}
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
          id="547281"
          title="Skinny jeans for him "
          description="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics"
          price={11.82}
          rating={5}
        />

      </div>

      {/*product-end */}
    </div>
  );
}

export default Home
