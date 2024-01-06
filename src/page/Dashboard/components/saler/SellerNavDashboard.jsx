import { Link, NavLink } from "react-router-dom";

const SellerNavDashboard = () => {
    return (
        <div className="flex items-center bg-[#F6D776] gap-6 p-3">
            <NavLink className={({isActive})=>isActive && 'text-white'} to={`addProduct`}>Add Products</NavLink>
            <NavLink className={({isActive})=>isActive && 'text-orange-400'} to={`SellerProducts`}>My Products</NavLink>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default SellerNavDashboard;