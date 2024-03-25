import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import {useApi} from '../hook/useApi' 

function App () {
    
  const [requestHit] = useApi();

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  
  useEffect(()=>{
    fetchData();
  }, [])


  const fetchData = ()=>{

    const allFunctions = [
        requestHit('get', 'products/list'), 
        requestHit('get', 'orders/list'), 
    ]

    Promise.all(allFunctions).then((pageData)=>{
        const productsList = pageData[0].data
        const ordersList = pageData[1].data
        setProducts(productsList)
        setOrders(ordersList)
    });
  }




  return (
    <Layout>
        <div className='container-fluid'>
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
        </div>
    </Layout>
  )
}

export default App
