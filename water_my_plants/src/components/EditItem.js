import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const initialPlantValues = {
  nickname: "",
  species: "",
  waterfrequency: "",
};

function EditItem({ plants, updatePlants }) {
  // styles

  const classes = useStyles();

  // State

  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlantValues);
  // action handlers

  const editPlant = (currentPlant) => {
    setEditing(true);
    // setPlantToEdit(currentPlant);
  };

  const savePlant = (e) => {
    e.preventDefault();
    // put request
  };

  const deletePlant = (plant) => {
    // delete request
  };

  const change = e => {
    e.persist()
    setPlantToEdit({...plantToEdit, [e.target.name]: e.target.value})
  }

  return (
    <div>
      {plants.map((plant) => (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          key={plant.id}
        >
          <p>{plant.nickname}</p>
          <div style={{display: 'flex'}}>
            <div onClick={editPlant} >
              <IconButton aria-label="delete" color="primary">
                <EditIcon fontSize="small" />
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="delete" color="primary">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
      {editing && (
        <form onSubmit={savePlant}>
          <legend>Edit Color:</legend>
          <label>
            Species:
            <input
              onChange={change}
              value={plantToEdit.species}
            />
          </label>
          <label>
            Nickname:
            <input
              onChange={change}
              value={plantToEdit.nickname}
            />
          </label>
          <label>
            Water:
            <input
              onChange={change}
              value={plantToEdit.waterfrequency}
            />
          </label>

          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditItem;
