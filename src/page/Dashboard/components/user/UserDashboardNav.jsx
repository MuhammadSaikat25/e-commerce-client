import { NavLink } from "react-router-dom";

const UserDashboardNav = () => {
    return (
        <div className="flex flex-col gap-10 text-white">
            <NavLink className={({isActive})=>isActive && "bg-blue-200 text-blue-700 px-10 rounded-xl"} to={`/dashboard/addToCard`}>My cart</NavLink>
            <NavLink className={({isActive})=>isActive && "bg-blue-200 text-blue-700 px-2 rounded-xl"} to={`/dashboard/myListing`}>My Listing</NavLink>
            <NavLink className={({isActive})=>isActive && "bg-blue-200 text-blue-700 px-10 rounded-xl"} to={`/`}>Home</NavLink>
            <NavLink className={({isActive})=>isActive && "bg-blue-200 text-blue-700 px-10 rounded-xl"} to={`/products`}>Product</NavLink>
        </div>
    );
};

export default UserDashboardNav;