"use client";

import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <a
      onClick={() => {
        void signOut();
      }}
    >
      Logout
    </a>
  );
}

export default LogoutButton;
