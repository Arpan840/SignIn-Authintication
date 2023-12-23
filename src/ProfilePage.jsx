import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profileDetails, setProfileDetails] = useState({
    email: "",
    firstName: "",
    gender: "",
    id: 0,
    image: "",
    lastName: "",
    token: "",
    username: "",
  });

  function getProfileData() {
    
    let profileData = localStorage.getItem("token");
    let parsedObject = JSON.parse(profileData);

    setProfileDetails({
      email: parsedObject.email,
      firstName: parsedObject.firstName,
      lastName: parsedObject.lastName,
      username: parsedObject.username,
      id: parsedObject.id,
      image: parsedObject.image,
      gender: parsedObject.gender,
    });
  }
  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={profileDetails.image}
          alt="Card  cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>Full Name: </b>
            {profileDetails.firstName + " " + profileDetails.lastName}
          </h5>
          <h5 className="card-title">
            <b>Email: </b>
            {profileDetails.email}
          </h5>
          <h5 className="card-title">
            <b>Gender: </b>
            {profileDetails.gender}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
