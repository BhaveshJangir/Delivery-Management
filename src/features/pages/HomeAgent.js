import React from "react";
import Navbar from "../navbar/Navbar";
import ParcelListList from "../product/components/ParcelList";
import CameraCaptureComponent from "../auth/components/CameraCaptureComponent";


function HomeAgent() {
    return ( 
        <>
        <Navbar/>
        <ParcelListList/>
        </>
     );
}

export default HomeAgent;