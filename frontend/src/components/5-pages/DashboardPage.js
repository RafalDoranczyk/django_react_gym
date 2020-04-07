import React, { useEffect } from "react";
import BottomNavigation from "components/3-organisms/BottomNavigation/BottomNavigation";
import axios from "axios";

const DashboardPage = () => {
  useEffect(() => {
    axios
      .get("/media/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h4>DIETA NA DZIŚ : 'TUTAJ DATA'</h4>
      <BottomNavigation />
    </>
  );
};

export default DashboardPage;
