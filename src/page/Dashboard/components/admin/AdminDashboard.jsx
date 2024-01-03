import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div>
            <NavLink to={'/dashboard/SellerRequest'}>Seller Request</NavLink>
        </div>
    );
};

export default AdminDashboard;