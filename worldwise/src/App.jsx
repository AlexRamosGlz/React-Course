import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./contexts/CititesContext.jsx";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/**
           * And so an index route is basically the default child route that is going to be matched
             if none of these other routes here matches (child will NOT get the "active" classname attached )
             
             the <Navigate /> is used for redirect to a certain path (with this now the element that lives on the
             specific path will now have the "active" class name attached)
           */}
            <Route index element={<Navigate replace to={"cities"} />} />
            {/**
           * So we need nested routes when we want a part

            of the user interface to be controlled by a part of the URL.
           */}
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
