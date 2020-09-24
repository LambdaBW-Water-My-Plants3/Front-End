import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import EditItem from "./EditItem";
import Plants from "./Plants";

import "../css/plantpage.css";

function PlantPage() {
  // State
  const [plants, setPlants] = useState([]);
  const [user, setUser] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("https://watermyplantunit4.herokuapp.com/users/getuserinfo")
      .then((res) => {
        setPlants(res.data.plants);
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="parent">
      <EditItem user={user} plants={plants} updatePlants={setPlants} />
      <Plants plants={plants} updatePlants={setPlants} />
    </div>
  );
}

export default PlantPage;
