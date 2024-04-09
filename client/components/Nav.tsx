import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">DANSBAGSTM</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
          <p>FAQ</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Login</p>
          <p>Cart</p>
        </div>
      </nav>
    </>
  )
}

export default Nav
