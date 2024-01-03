import { Link, NavLink } from "react-router-dom";

const SellerNavDashboard = () => {
    return (
        <div className="flex flex-col gap-6">
            <NavLink to={`addProduct`}>Add Products</NavLink>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default SellerNavDashboard;