import React from "react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import UserIcon from "@/components/utils/UserIcon";
export default function RightNav() {
  return (
    <>
      <div className="flex items-center gap-3">
        <MarkEmailUnreadOutlinedIcon className="text-4xl bg-gray-200 text-black rounded-full p-1.5" />
        <NotificationsNoneOutlinedIcon className="text-4xl bg-gray-200 text-black rounded-full p-1.5" />
        <UserIcon />
      </div>
    </>
  );
}
