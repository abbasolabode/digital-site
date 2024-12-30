import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Feature from "./components/Feature";

//Pages
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Messages from "./pages/Messages";
import Transaction from "./pages/Transaction";
import PageNotFound from "./pages/PageNotFound";


export default function App() {
	return (
		<div className="w-[26.75rem] lScreen:w-[24.375rem]">
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="home" element={<Home />} />
					<Route path="feature" element={<Feature />} />
					<Route path="contact" element={<Contact />} />
					<Route path="layout" element={<Layout />}>
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="product" element={<Products />} />
						<Route path="order" element={<Orders />} />
						<Route path="message" element={<Messages />} />
						<Route path="customer" element={<Customers />} />
						<Route path="transaction" element={<Transaction />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
