import React from 'react'
// import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import TopCategory from './topCategory'
import PopularCategory from './popularCategory'
import BestDeals from './bestDeals'
import JustLaunched from './justLaunched'
import ShopByBrand from './shopByBrand'
import DiscountBanner from './discountBanner'
// import {useApi} from '../hook/useApi' 
import headerBanner from '../assets/images/header-banner.png'

function App () {
    
//   const [requestHit] = useApi();

//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);

  
//   useEffect(()=>{
//     fetchData();
//   }, [])


//   const fetchData = ()=>{

//     const allFunctions = [
//         requestHit('get', 'products/list'), 
//         requestHit('get', 'orders/list'), 
//     ]

//     Promise.all(allFunctions).then((pageData)=>{
//         const productsList = pageData[0].data
//         const ordersList = pageData[1].data
//         setProducts(productsList)
//         setOrders(ordersList)
//     });
//   }




  return (
    <Layout>
        {/* <!--========= Header Banner Start ========== --> */}
        <header className="header-grp header-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h1 className='header1'>Workout Essential supplements </h1>
                        <p className="opacity-75">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.</p>
                        <div>
                            <div className="mt-4">
                                <button type="button" href="#" className="button-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src={headerBanner} alt="header-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </header>
        {/* <!--========= Header Banner End ========== --> */}

        <TopCategory />

        <PopularCategory />

        <BestDeals />

        <JustLaunched />

        <ShopByBrand />

        <DiscountBanner />

        {/* <div className='container-fluid'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" colSpan={4}>Products List</th>
                    </tr>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Available</th>
                    </tr>
                </thead>
                <tbody>
                    { products?.map((product, index)=> (
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{product.product_name}</td>
                            <td>{product.product_description}</td>
                            <td>{product.available}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" colSpan={4}>Order List</th>
                    </tr>
                    <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Order</th>
                    <th scope="col">Description</th>
                    <th scope="col">Available</th>
                    </tr>
                </thead>
                <tbody>
                    { orders?.map((order, index)=> (
                        <tr key={index}>
                            <th scope="row">{order._id}</th>
                            <td>{order.product_id}</td>
                            <td>{order.count}</td>
                            <td>{order.price}</td>
                            <td>{order.count * order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> */}
    </Layout>
  )
}

export default App
