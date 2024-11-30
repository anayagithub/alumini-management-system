// profile/page.js
"use client"; // Add this to ensure this component is a client-side component

import React from "react";
import Membership from "@/components/Membership"; // Adjust the path if necessary

const ProfilePage = () => {
  const handleBack = () => {
    window.history.back(); // This will take you back to the previous page (Services)
  };

  return (
    <div className="profile-page-container">
      <Membership onBack={handleBack} />
    </div>
  );
};

export default ProfilePage;
