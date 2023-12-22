import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectLoggedInUser } from "../../auth/authSlice";

export default function UserProfile() {
  const user = useSelector(selectLoggedInUser);

  return (
    <div>
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flow-root">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Name: {user.name ? user.name : "New User"}
            </h1>
            <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              email address : {user.email}
            </h3>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Youe Address:</p>
          {user.addresses.map((address) => (
            <div className="flex justify-between gap-x-6 py-5 border-2 border-gray-200 px-5">
              <div className="flex min-w-0 gap-x-4 ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>

                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {address.pincode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone: {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-500">
                  {address.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}