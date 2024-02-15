import axios from "axios";
import { useEffect, useState } from "react";
import './CharactersListPage.css'

const API_URL = "http://localhost:5000/characters"

function CharactersListPage() {

    const [characters, setCharacters] = useState(null);

    const getAllCharacters = () => {
        axios
            .get(API_URL)
            .then((results) => setCharacters(results.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllCharacters()

    }, []);


    /* get info from server */

    return (
        <>
            <h1> Characters List </h1>

            {characters ?
            <ul className="ul">
                
                {
                    characters.map((character) => {
                        return (
                        <li className="list1">
                            <h3> {character.name}</h3>
                            <p>{character.description}</p>
                            <p>{character.power}</p>
                            <img src={character.image_url} alt={character.name} />
                        </li>
                        )
                    
                })
            }
                </ul> 
                
            : 
            <p>Loading Characters...</p>

            }
        </>
    )
}

export default CharactersListPage;