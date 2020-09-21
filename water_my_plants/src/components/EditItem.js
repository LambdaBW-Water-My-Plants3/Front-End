import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

const initialPlantValues = {
    nickname: "",
    species: "",
    waterfrequency: ""
}

function EditItem() {

    // State
    const [editing, setEditing] = useState(false)
    const [plantToEdit, setPlantToEdit] = useState(initialPlantValues)

    const editPlant = (currentPlant) => {
        setEditing(true)
        setPlantToEdit(currentPlant)
    }

    const savePlant = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <p>edit list</p>
        </div>
    )
}

export default EditItem
