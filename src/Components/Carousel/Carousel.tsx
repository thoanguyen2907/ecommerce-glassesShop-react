import React from 'react'
import './Carousel.scss'
import bg1 from '../../assets/img/bg-glasses-1.jpeg';
import bg2 from '../../assets/img/bg-glasses-2.jpeg';
import bg3 from '../../assets/img/bg-glasses-3.jpeg';
import { Container } from '../../StyledElements/Container/Container';
export default function Carousel() {
    return (
        <section className="my-carousel d-md-block d-none">
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to={0} className="active" />
            <li data-target="#carousel" data-slide-to={1} />
            <li data-target="#carousel" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item item-1 active" style={{backgroundImage:`url(${bg1})` }}>                   
              <div className="carousel-item-overlay" />
              <div className="carousel-item-caption ">
                <h1 className="display-4 text-white">Best Sunglasses for summer</h1>
              </div>
            </div>
            <div className="carousel-item  item-2" style={{backgroundImage:`url(${bg2})` }}>                    
              <div className="carousel-item-overlay" />
              <div className="carousel-item-caption">
                <h1 className="display-4 text-white">Best Sunglasses for summer</h1>
             
              </div>
            </div>     
            <div className="carousel-item  item-2" style={{backgroundImage:`url(${bg3})` }}>                    
              <div className="carousel-item-overlay" />
              <div className="carousel-item-caption">
                <h1 className="display-4 text-white">Best Sunglasses for summer</h1>
             
              </div>
            </div>              
           
          </div>
        </div>
      </section>
    )
}
