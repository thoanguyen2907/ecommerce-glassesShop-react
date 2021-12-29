import { ShopOutlined } from '@ant-design/icons';
import React from 'react'
import { Container } from '../../StyledElements/Container/Container';
import './FeatureCompany.scss'

export default function FeatureCompany() {
    return (
      <Container>
        <section className="features__company">
        <div className="row">
        <div className="col-md-4  col-12">
         <div className="features__info">
           <div className="features__icon">
           <ShopOutlined style={{ fontSize: '22px', color: '#08c' }}/> 
           </div>
          <div className="features__detail">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas quo cumque assumenda debitis accusamus suscipit earum quae perferendis quisquam!</p>
          </div>          
         </div>
      </div>
      <div className="col-md-4  col-12">
         <div className="features__info">
           <div className="features__icon">
           <ShopOutlined style={{ fontSize: '22px', color: '#08c' }}/> 
           </div>
          <div className="features__detail">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas quo cumque assumenda debitis accusamus suscipit earum quae perferendis quisquam!</p>
          </div>          
         </div>
      </div>
      <div className="col-md-4  col-12">
         <div className="features__info">
           <div className="features__icon">
           <ShopOutlined style={{ fontSize: '22px', color: '#08c' }}/> 
           </div>
          <div className="features__detail">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas quo cumque assumenda debitis accusamus suscipit earum quae perferendis quisquam!</p>
          </div>          
         </div>
      </div>

     </div>
 </section>
 </Container>
    )
}
