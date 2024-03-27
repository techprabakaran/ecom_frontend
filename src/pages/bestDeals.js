import React from 'react'
import BestSeller from '../assets/images/best-seller.png'

function App () {
    
  return (
    <>
        {/* <!--========= Best Deals Start ========== --> */}
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 px-0">
                        <div className="shadow best-deals h-100">
                        <h3> Best deals for<span> Vitamin Tablets</span></h3>
                        <p className="mt-3">In publishing and graphic design, Lorem ipsum is a placeholder</p>
                        <div className="mt-4">
                                <button type="button" href="#" className="button-primary">Buy Now</button>
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-8 px-0">
                        <div className="h-100">
                            <img src={BestSeller} alt="best-seller" className="img-fluid" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* <!--========= Best Deals End ========== --> */}
    </>
  )
}

export default App
