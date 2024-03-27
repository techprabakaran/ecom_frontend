import React from 'react'

function App () {
    
  return (
    <>
        {/* <!--========= Discount Start ========== --> */}
        <section className="section-padding">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <h2 className='header2'>Grab an extra 5% discount</h2>
                        <p className="mt-3 mb-0">Subscribe to monthly newsletter. Get the latest product updates and special offers delivered right to your inbox. </p>
                    </div>
                    <div className="col-lg-5 subscribe">
                        <div className="button-secondary-grp w-100">
                            <div className="button-secondary w-100">
                                <input type="text" className="form-control border-0" placeholder="Enter Email Address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--========= Discount Start ========== --> */}
    </>
  )
}

export default App
