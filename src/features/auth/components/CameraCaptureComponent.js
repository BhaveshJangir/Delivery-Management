import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import ParcelList from "../../product/components/ParcelList";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../authSlice";

const CameraCaptureComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };
  
  // useEffect(() => {
  //   dispatch(updateUserAsync(captureImage))
  // }, []);

  return (
    <div>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
      </Link>
      {!capturedImage ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ width: "100vw", height: " 80vh" }}
        />
      ) : (
        <div>
          
          <img
            src={capturedImage}
            alt="Captured"
            style={{ width: "100%", maxWidth: 500, height: "auto" }}
          />
        </div>
      )}
      {!capturedImage && <button onClick={captureImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Capture Image</button>}
    </div>
  );
};

export default CameraCaptureComponent;
