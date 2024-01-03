import { NavLink } from "react-router-dom";

const UserDashboardNav = () => {
    return (
        <div className="flex flex-col gap-10">
            <NavLink to={`/dashboard/addToCard`}>My cart</NavLink>
            <NavLink to={`/dashboard/myListing`}>My Listing</NavLink>
            <NavLink to={`/`}>Home</NavLink>
        </div>
    );
};

export default UserDashboardNav;