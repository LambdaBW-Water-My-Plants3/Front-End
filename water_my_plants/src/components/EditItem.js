import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialPlantValues = {
  nickname: "",
  species: "",
  waterfrequency: ""
};

function EditItem({ user, plants, updatePlants }) {
  
  // State

  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlantValues);
  const [adding, setAdding] = useState(false);

  // action handlers

  const editPlant = (currentPlant) => {
    setEditing(true);
    setPlantToEdit(currentPlant);
  };

  const savePlant = (e) => {
    e.preventDefault();
    console.log(user);
    const newPlant = {
      nickname: plantToEdit.nickname,
      species: plantToEdit.species,
      waterfrequency: plantToEdit.waterfrequency,
      user: {
        userid: user.userid
      }
    }
    axiosWithAuth()
      .put(`/plants/plant/${plantToEdit.plantid}`, newPlant)
      .then((res) => {
        console.log(res);
        setEditing(false);
        updatePlants(
          plants.map((plantItem) => {
            if (plantItem.id === plantToEdit.id) {
              return plantToEdit;
            } else {
              return plantItem;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deletePlant = (plant) => {
    axiosWithAuth()
      .delete(`/plants/plant/delete/${plant.plantid}`)
      .then(res => {
        updatePlants(
          plants.filter(item => {
            return item.id !== plant.id
          }))
      })
      .catch(err => {
        console.log(err);
      })
  };

  const addPlant = e => {
    e.preventDefault()
    const newPlant = {
      nickname: plantToEdit.nickname,
      species: plantToEdit.species,
      waterfrequency: plantToEdit.waterfrequency,
      user: {
        userid: user.userid
      }
    }
    axiosWithAuth()
      .post('/plants/plant', newPlant)
      .then(res => {
        console.log('POST RES', res);
      })
      .catch(err => {
        console.log(err.message);
      })
    setPlantToEdit(initialPlantValues)
  };

  const change = (e) => {
    e.persist();
    setPlantToEdit({ ...plantToEdit, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      {plants.map((plant) => (
        <div
          style={{ display: "flex", justifyContent: "space-between", fontSize: '16px'}}
          key={plant.plantid}
        >
          <p>{plant.nickname}</p>
          <div style={{ display: "flex" }}>
            <div onClick={() => editPlant(plant)}>
              <IconButton aria-label="delete" color="primary">
                <EditIcon fontSize="small" />
              </IconButton>
            </div>
            <div onClick={() => deletePlant(plant)} >
              <IconButton aria-label="delete" color="primary">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
      <Button color="primary" onClick={() => setAdding(true)}>Add Plant</Button>
      {editing && (
        <form onSubmit={savePlant}>
          <legend>Edit Plant:</legend>
          <TextField
            onChange={change}
            name="species"
            value={plantToEdit.species}
            label="Species"
          />
          <TextField
            onChange={change}
            name="nickname"
            value={plantToEdit.nickname}
            label="nickname"
          />
          <TextField
            onChange={change}
            name="waterfrequency"
            value={plantToEdit.waterfrequency}
            label="water"
          />
          <div className="button-row">
            <Button type="submit" color="secondary">save</Button>
            <Button onClick={() => setEditing(false)}>cancel</Button>
          </div>
        </form>
      )}
      {adding && (
        <form onSubmit={addPlant}>
          <legend>Add Plant:</legend>
          <TextField
            onChange={change}
            name="species"
            value={plantToEdit.species}
            label="Species"
          />
          <TextField
            onChange={change}
            name="nickname"
            value={plantToEdit.nickname}
            label="nickname"
          />
          <TextField
            onChange={change}
            name="waterfrequency"
            value={plantToEdit.waterfrequency}
            label="water"
          />
          <div className="button-row">
            <Button type="submit" color="secondary">add</Button>
            <Button onClick={() => setAdding(false)}>cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditItem;
