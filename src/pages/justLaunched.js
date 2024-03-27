import React from 'react'
import { Link } from 'react-router-dom'
import Offer from '../assets/images/offer.png'
import RightArrow from '../assets/images/right-arrow.png'
import PopularOne from '../assets/images/popular/1.png'
import PopularTwo from '../assets/images/popular/2.png'
import PopularThree from '../assets/images/popular/3.png'
import PopularFour from '../assets/images/popular/4.png'

function App () {
    
  return (
    <>
        {/* <!--========= Just Launched Start ========== --> */}
        <section className="section-padding">
            <div className="container">
                <div className="d-flex title-header-grp align-items-center justify-content-between">
                    <div className="title-header">
                        <h4>Just Launched</h4>
                    </div>
                    <div className="view-all">
                        <Link>View All</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <div className="text-end float-right">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={Offer} alt="offer" className="img-fluid" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                    <img src={RightArrow} alt="" className="ms-2" />
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <img src={PopularOne} alt="MB Fuel Whey Protein Immunity +2kg" className="img-fluid" />
                            <h4>MB Fuel Whey Protein Immunity +2kg </h4>
                            <p><del className="amt-del">MRP : ₹5,798</del></p>
                            <p className="amt">Price:3,899<span>32% OFF</span></p>
                            <div className="mt-4">
                                <div className="button-secondary-grp"><div className="button-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>Add To Cart
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-end float-right">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={Offer} alt="offer" className="img-fluid" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                    <img src={RightArrow} alt="" className="ms-2" />
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <img src={PopularTwo} alt="MB Fuel Whey Protein Immunity +2kg" className="img-fluid" />
                            <h4>MB Fuel Whey Protein Immunity +2kg </h4>
                            <p><del className="amt-del">MRP : ₹5,798</del></p>
                            <p className="amt">Price:3,899<span>32% OFF</span></p>
                            <div className="mt-4">
                                <div className="button-secondary-grp"><div className="button-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>Add To Cart
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-end float-right">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={Offer} alt="offer" className="img-fluid" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                    <img src={RightArrow} alt="" className="ms-2" />
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <img src={PopularThree} alt="MB Fuel Whey Protein Immunity +2kg" className="img-fluid" />
                            <h4>MB Fuel Whey Protein Immunity +2kg </h4>
                            <p><del className="amt-del">MRP : ₹5,798</del></p>
                            <p className="amt">Price:3,899<span>32% OFF</span></p>
                            <div className="mt-4">
                                <div className="button-secondary-grp"><div className="button-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>Add To Cart
                                    </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-end float-right">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={Offer} alt="offer" className="img-fluid" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                    <img src={RightArrow} alt="" className="ms-2" />
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <img src={PopularFour} alt="MB Fuel Whey Protein Immunity +2kg" className="img-fluid" />
                            <h4>MB Fuel Whey Protein Immunity +2kg </h4>
                            <p><del className="amt-del">MRP : ₹5,798</del></p>
                            <p className="amt">Price:3,899<span>32% OFF</span></p>
                            <div className="mt-4">
                                <div className="button-secondary-grp"><div className="button-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>Add To Cart
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!--========= Just Launched End ========== --> */}
    </>
  )
}

export default App
