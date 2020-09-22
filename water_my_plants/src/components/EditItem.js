import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    setPlantToEdit(currentPlant);
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
          key={plant.plantid}
        >
          <p>{plant.nickname}</p>
          <div style={{display: 'flex'}}>
            <div onClick={() => editPlant(plant)} >
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
          <legend>Edit Plant:</legend>
            <TextField
              onChange={change}
              name='species'
              value={plantToEdit.species}
              label='Species'
            />
            <TextField
              onChange={change}
              name='nickname'
              value={plantToEdit.nickname}
              label='nickname'
            />
            <TextField
              onChange={change}
              name='waterfrequency'
              value={plantToEdit.waterfrequency}
              label='water'
            />
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
