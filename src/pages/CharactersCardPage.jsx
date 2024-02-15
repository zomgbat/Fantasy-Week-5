import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";



const API_URL = "http://localhost:5000/characters"


function CharactersCardPage() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [power, setPower] = useState("");
    /*  const [equipments, setEquipments] = useState(""); */

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCharacter = { name, description, image_url, power };
        console.log(newCharacter);




        axios
            .post(API_URL, newCharacter)
            .then((response) => console.log (response.data))
            .catch((error) => console.log(error))





        /* setName("");
        setDescription("");
        setImageUrl("");
        setPower(""); */

    };


    return (

        <form onSubmit={handleSubmit}>
            <h3>Add a Character</h3>
            <div>
                <label>
                    Character Name:
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
                </label>
                <label>
                    Description:
                    <input value={description} onChange={(event) => setDescription(event.target.value)} id="setDescription" type="text" />
                </label>
                <label>
                    Image URL:
                    <input value={image_url} onChange={(event) => setImageUrl(event.target.value)} id="setImage_url" type="url" />
                </label>
                <label>
                    Power:
                    <input value={power} onChange={(event) => setPower(event.target.value)} id="setPower" type="text" />
                </label>
                {/*   <label>
                        Equipments:
                        <input value={equipments} onChange={(event) => setEquipments(event.target.value)} id="setEquipments" type="text" />
                    </label> */}
            </div>
            <button type="submit">Add Character</button>
            <Link to="/">Home</Link> {/* Link to the home page outside the form */}
            
        </form>

    );
}

export default CharactersCardPage;