import { Link } from 'react-router-dom'
function Footer () {
  return (
    <>
      <footer className='section-padding section-primary-bg'>
        <div className='container'>          
          <div className='row mt-5'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <h5 className='theme-primary-text fw-bold'>Footer Block 1</h5>
              <ul className='list-unstyled footer-list mt-3'>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    One
                  </Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    Two
                  </Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    Three
                  </Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    Four
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <h5 className='theme-primary-text fw-bold'>Footer Block 2</h5>
              <ul className='list-unstyled footer-list mt-3'>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    One
                  </Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-secondary'>
                    Two
                  </Link>
                </li>
                <li>
                  <Link className='text-decoration-none text-secondary '>
                    Three
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
