import React from "react";

const Profile = () => {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <img
        src={process.env.PUBLIC_URL + "/profil.jpg"}
        alt="Profil"
        className="img-fluid rounded-circle"
        style={{ width: "150px", height: "150px" }}
      />
      <p>Muhamad Bintang Fitriatuderajat</p>
      <p>120140040</p>
    </div>
  );
};

export default Profile;
