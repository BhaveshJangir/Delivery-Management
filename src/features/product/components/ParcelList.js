import React, { useEffect, useState, useRef } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from "../../order/orderSlice";
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Pagination from "../../common/Pgination";
import { selectLoggedInUser } from "../../auth/authSlice";
import CameraCapture from "../../auth/components/CameraCaptureComponent";
import "./ParcelList.css";

function ParcelList({ pop }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const user = useSelector(selectLoggedInUser);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  // const handlecamera = () => {
  //   window.open("/camera-popup");
  // };

  console.log(pop);
  const [showPopup, setShowPopup] = useState();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };

  const handleOrderStatus = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-purple-600";
      case "dispatched":
        return "bg-yellow-200 text-yellow-600";
      case "delivered":
        return "bg-green-200 text-green-600";
      case "received":
        return "bg-green-200 text-green-600";
      case "cancelled":
        return "bg-red-200 text-red-600";
      default:
        return "bg-purple-200 text-purple-600";
    }
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ pagination }));
  }, [dispatch, page]);

  return (
    <>
      {!showPopup ? (
        <div className="sm:overflow-x-auto sm:m-3 sm:p-10">
          <div className="bg-gray-100 flex sm:items-center justify-center font-sans sm:overflow-hidden">
            <div className="sm:w-full">
              <div className="bg-white shadow-md rounded sm:my-6">
                <table className="sm:w-full table-auto">
                  <thead>
                    <tr className="sm:bg-gray-200 sm:text-gray-600 sm:uppercase text-sm sm:leading-normal ">
                      <th>Order</th>
                      <th className="sm:py-3 px-0 text-left">Parcel No.</th>
                      <th className="py-3 px-0 text-left cursor-pointer">
                        Recivers Name
                      </th>
                      <th className="py-3 px-0 text-center">
                        Shipping Address
                      </th>
                      <th className="py-3 px-0 text-center">Order Status</th>
                      <th className="py-3 px-0 text-center">Capture</th>
                      <th className="py-3 px-0 text-center">Image</th>
                      <th className="py-3 px-0 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {orders.map((order) =>
                      Number(order.agentid) == user.id ? (
                        <tr
                          key={order.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-0 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="mr-2"></div>
                              <span className="font-medium">{order.id}</span>
                            </div>
                          </td>

                          <td className="py-6 px-0 text-center">
                            <div className="flex items-center justify-center">
                              {order.parcelno}
                            </div>
                          </td>
                          <td className="py-3 px-0 text-center">
                            <div className="flex items-center justify-center">
                              {order.name}
                            </div>
                          </td>
                          <td className="py-3 px-0 text-center">
                            <div className="">
                              <div>
                                <strong>{order.street}</strong>,
                              </div>
                              <div>{order.city},</div>
                              <div>{order.state}, </div>
                              <div>{order.pincode}, </div>
                              <div>{order.phone}, </div>
                            </div>
                          </td>
                          <td className="py-3 px-0 text-center">
                            {order.id === editableOrderId ? (
                              <select
                                onChange={(e) => handleOrderStatus(e, order)}
                              >
                                <option value="pending">Pending</option>
                                <option value="dispatched">Dispatched</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            ) : (
                              <span
                                className={`${chooseColor(
                                  order.status
                                )} py-1 px-3 rounded-full sm:text-xs`}
                              >
                                {order.status}
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-0 text-center">
                            {/* <button onClick={handlecamera}>capture</button> */}
                            <div className="ParcelList">
                              <button
                                onClick={togglePopup}
                                className="bg-blue-500 hover:bg-blue-700 text-white sm:font-bold md:py-2 md:px-4 rounded"
                              >
                                Item
                              </button>
                            </div>
                          </td>

                          <td className="py-3 px-0 text-center">
                            {/* <button onClick={handlecamera}>capture</button> */}
                            <div className="ParcelList">
                              <button
                                onClick={togglePopup}
                                className="bg-blue-500 hover:bg-blue-700 text-white sm:font-bold md:py-2 md:px-4 rounded"
                              >
                                Invoice
                              </button>
                            </div>
                          </td>

                          <td className="py-3 px-0 text-center">
                            <div className="flex item-center justify-center">
                              <div className="w-6 sm:mr-4 transform hover:text-purple-500 hover:scale-120"></div>
                              <div className="w-6 sm:mr-2 transform hover:text-purple-500 hover:scale-120">
                                <PencilIcon
                                  className="sm:w-8 sm:h-8"
                                  onClick={(e) => handleEdit(order)}
                                ></PencilIcon>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            handlePage={handlePage}
            totalItems={totalOrders}
          ></Pagination>
        </div>
      ) : (
        <CameraCapture onClose={togglePopup} />
      )}
    </>
  );
}

export default ParcelList;
