import { Link } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import { toast } from 'react-toastify'
// import {useApi} from '../hook/useApi' 
import logo from '../assets/images/logo.png';

function Header () {
  
  // const [requestHit] = useApi();

  // const [showLogin, setShowLogin] = useState(false);

  // const handleClose = () => setShowLogin(false);
  // const handleShow = () => setShowLogin(true);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // let navigate = useNavigate()
  
  // const logout = async () => {
  //   localStorage.clear()
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   requestHit('post', 'users/login', { 'user_name': username, 'password' : password }).then((res)=>{
  //     localStorage.setItem('token', res.data?.token);
  //     toast.success("Login Successfuly..!")
  //   });

  //   handleClose(); // Simulate successful login and close modal

  // };


  return (
    <>

    {/* <!--========= Navigation Start ===========--> */}
    <nav className="navbar navbar-expand-md navbar-dark bg-light d-block" aria-label="Fourth navbar example">
        <div>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="input-group search-grp">
                            <span className="input-group-text" id="inputGroup-sizing-default">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </span>
                            <input type="text" className="form-control " placeholder="Search for Products" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="border-start ms-4 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </div>
                        <div className="ms-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </div>
                        <div className="ms-3">
                            <button type="button"  className="button-primary w-125">Get Start<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                              </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" >Best Sellers</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" >Returns & Warranty</Link></li>
                          <li><Link className="dropdown-item" >Payments</Link></li>
                          <li><Link className="dropdown-item" >Shipping</Link></li>
                        </ul>
                      </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Brand</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" >Brands</Link></li>
                        <li><Link className="dropdown-item" >Investors</Link></li>
                        <li><Link className="dropdown-item" >Cookies</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Outlet</Link>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" >Buy Gift Cards</Link></li>
                          <li><Link className="dropdown-item" >Redeem Card</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" >Offers</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" >Our Story</Link>
                      </li>
                  </ul>
                 
                </div>
              </div>
        </div>
       
    </nav>
    {/* <!--========= Navigation End ===========--> */}

      {/* <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default Header
