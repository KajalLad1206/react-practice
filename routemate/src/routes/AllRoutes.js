import {Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Home,  Admin, ProductList,  ProductDetail,  Contact,
  ContactIn, ContactCa, ContactUs,  PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<ProductList />}></Route>
            <Route path="products/:id" element={<ProductDetail />}></Route>
            <Route path="contact" element={<Contact />}>
                <Route path="in" element={<ContactIn />}></Route>
                <Route path="ca" element={<ContactCa />}></Route>
                <Route path="us" element={<ContactUs />}></Route>
            </Route>        
            <Route path="/admin" element={<Admin />}>
            </Route>
            <Route path="/admin" element={<Navigate to="/"  />}></Route>
            <Route path="*" element={<PageNotFound title="Page Not Found" />}></Route>
        </Routes>
    </>
  )
}
