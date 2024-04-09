/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        {/* <Route path="gallery">
          <Route index element={<Gallery />} />
        </Route>
        <Route path="faq">
          <Route index element={<Faq />} />
        </Route>
        <Route path="blog">
          <Route index element={<Blog />} />
        </Route>
        <Route path="cart">
          <Route index element={<Cart />} />
        </Route> */}
        {/* <Route path="login">
          <Route index element={<Login />} />
        </Route> */}
      </Route>
    </>,
  ),
)

export default router
