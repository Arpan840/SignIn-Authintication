import React,{useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const localStoreData = localStorage.getItem("token");
  const parsedData = JSON.parse(localStoreData);
  const auth = parsedData && parsedData.token;

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return auth ? <Outlet /> : navigate('/');
};

export default PrivateRoute;
