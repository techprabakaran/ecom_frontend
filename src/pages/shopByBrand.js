import React from 'react'
import BrandPos from '../assets/images/brand-pos.png'
import BrandOne from '../assets/images/shop-brand/1.png'
import BrandTwo from '../assets/images/shop-brand/2.png'
import BrandThree from '../assets/images/shop-brand/3.png'
import BrandFour from '../assets/images/shop-brand/4.png'
import BrandFive from '../assets/images/shop-brand/5.png'
import BrandSix from '../assets/images/shop-brand/6.png'

function App () {
    
  return (
    <>
        {/* <!--========= Shop By Brand Start ========== --> */}
        <section className="section-padding position-relative">
            <div className="brand-pos">
                <img src={BrandPos} alt="brand-pos" className="img-fluid" />
            </div>
        
            <div className="container">
                <div className="title-header">
                    <h4 className='header4'>Shop by Brand</h4>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <img src={BrandOne} alt="brand" className="img-fluid" />
                    </div>
                    <div className="col-lg-4">
                        <img src={BrandTwo} alt="brand" className="img-fluid" />
                    </div>
                    <div className="col-lg-4">
                        <img src={BrandThree} alt="brand" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 mt-4">
                        <img src={BrandFour} alt="brand" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 mt-4">
                        <img src={BrandFive} alt="brand" className="img-fluid" />
                    </div>
                    <div className="col-lg-4 mt-4">
                        <img src={BrandSix} alt="brand" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
        {/* <!--========= Shop By Brand Start ========== --> */}
    </>
  )
}

export default App
