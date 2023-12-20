import SearchComponent from "@/components/utils/SearchComponent";
import React from "react";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import UserIcon from "@/components/utils/UserIcon";
import OrderTabs from "@/components/admin/Orders/OrderTabs";

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <SearchComponent />
        <div className="flex items-center gap-2">
          <NotificationsNoneOutlinedIcon className="text-4xl bg-gray-200 text-black rounded-full p-1.5" />{" "}
          <UserIcon />
        </div>
      </div>
      <div className="pl-3">
        <OrderTabs />
      </div>
    </div>
  );
}
