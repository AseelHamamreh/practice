import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export class Data extends Component {
  render() {
    return (
      <div style={{marginTop:'30px'}}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {this.props.data.map((data,idx)=>{
            return <SwiperSlide style={{marginTop:'30px'}}>
              <img style={{width:'200px',height:'250px', marginLeft:'30px', marginRight:'30px'}} src={data.img} alt={data.name}/>
              <h5 style={{marginLeft:'30px', marginRight:'30px'}}>{data.name}</h5>
              <p style={{marginLeft:'30px', marginRight:'30px'}}>{data.price} $</p>
              <button style={{marginLeft:'30px', marginRight:'30px'}} onClick={()=>this.props.saveInDB(data)}>Add to Cart</button>
            </SwiperSlide>;
          })}
        </Swiper>

      </div>
    );
  }
}

export default Data;
