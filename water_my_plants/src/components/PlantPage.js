import React, { useState, useEffect } from "react";
import axios from "axios";
import EditItem from "./EditItem";
import Plants from "./Plants";

import "../css/plantpage.css";

function PlantPage() {
  // State
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("https://watermyplantunit4.herokuapp.com/plants/plants")
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="parent">
      <EditItem plants={plants} updatePlants={setPlants} />
      <Plants plants={plants} />
    </div>
  );
}

export default PlantPage;
