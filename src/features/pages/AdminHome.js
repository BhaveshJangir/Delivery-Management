import React from "react";
import AdminForm from "../admin/components/AdminForm";
import Navbar from "../navbar/Navbar";
function AdminHome() {
    return ( 
        <Navbar>
            <AdminForm ></AdminForm>
        </Navbar>
     );
}

export default AdminHome;