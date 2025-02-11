import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Advertisements from "./Advertisements";
import Contacts from "./Contacts";

export default function RightBar() {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Advertisements />
      <Contacts />
    </div>
  );
}
