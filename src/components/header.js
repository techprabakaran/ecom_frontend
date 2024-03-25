import { useNavigate, Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'
import {useApi} from '../hook/useApi' 

function Header () {
  
  const [requestHit] = useApi();

  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate()
  
  const logout = async () => {
    localStorage.clear()
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    requestHit('post', 'users/login', { 'user_name': username, 'password' : password }).then((res)=>{
      localStorage.setItem('token', res.data?.token);
      toast.success("Login Successfuly..!")
    });

    handleClose(); // Simulate successful login and close modal


  };
  return (
    <>
      <nav
        className=' menu-bar navbar navbar-expand-lg navbar-dark bg-dark sticky-top'
        aria-label='Offcanvas navbar large'
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' style={{ cursor: 'pointer' }} to='/'>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar2'
            aria-controls='offcanvasNavbar2'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end text-bg-dark'
            tabIndex='-1'
            id='offcanvasNavbar2'
            aria-labelledby='offcanvasNavbar2Label'
          >
            <div className='offcanvas-header'>
             
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link className='nav-link' aria-current='page' to='/menuone'>
                    Menu 1
                  </Link>
                </li>
                {localStorage.getItem('token') != null && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/menutwo'>
                    Menu 2
                    </Link>
                  </li>
                )}
                <li className='nav-item'>
                  <Link className='nav-link' to='/menuthree'>
                    Menu 3
                  </Link>
                </li>              
              </ul>
              <div>
                {localStorage.getItem('token') === null ? (
                  <button type="button" className="btn btn-primary" onClick={handleShow}>
                    Login
                  </button>
                ) : (
                  <button
                    className='primary-btn btn-sm py-1 px-2 mt-4 mt-lg-0'
                    type='button'
                    onClick={() => {
                      logout()
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Modal show={showLogin} onHide={handleClose}>
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
      </Modal>
    </>
  )
}

export default Header
