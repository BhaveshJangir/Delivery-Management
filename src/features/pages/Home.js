import React from "react";
import Navbar from "../navbar/Navbar";
import UserOrders from "../user/components/UserOrders";

function Home() {
    return ( 
        <Navbar>
            <UserOrders></UserOrders>
        </Navbar>
     );
}

export default Home;