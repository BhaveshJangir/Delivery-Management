import AdminProductList from "../admin/components/AdminProductList";
import Navbar from "../navbar/Navbar";
function AdminHome() {
    return ( 
        <Navbar>
            <AdminProductList ></AdminProductList>
        </Navbar>
     );
}

export default AdminHome;