import React from 'react'
import { Link } from 'react-router-dom'
import CategoryOne from '../assets/images/category/1.png'
import CategoryTwo from '../assets/images/category/2.png'
import CategoryThree from '../assets/images/category/3.png'
import CategoryFour from '../assets/images/category/4.png'

function App () {
    
  return (
    <>
        {/* <!--========= Category Start ========== --> */}
        <section className="section-padding">
            <div className="container">
                <div className="d-flex title-header-grp align-items-center justify-content-between">
                    <div className="title-header">
                        <h4>Top Category’s </h4>
                    </div>
                    <div className="view-all">
                        <Link>View All</Link>
                    </div>
                </div>
                <div className="row mt-4 category-grp">
                    <div className="col-lg-3">
                        <div className="category-inners category-inners-1 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>Vitamins</h3>
                                </div>
                                <div>
                                    <img src={CategoryOne} alt="Vitamins" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="category-inners category-inners-2 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>Medicine</h3>
                                </div>
                                <div>
                                    <img src={CategoryTwo} alt="Medicine" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="category-inners category-inners-3 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>Home Healthcare</h3>
                                </div>
                                <div>
                                    <img src={CategoryThree} alt="Home Healthcare" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="category-inners category-inners-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>Fish Oil & Omega</h3>
                                </div>
                                <div>
                                    <img src={CategoryFour} alt="Fish Oil & Omega" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        {/* <!--========= Category End ========== --> */}
    </>
  )
}

export default App
