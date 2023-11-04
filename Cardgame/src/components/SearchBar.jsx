import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"
import "./searchBar.css"

export const SearchBar = () => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then((response) => response.json())
        .then(json => {
            if (Array.isArray(json)) {
            const results = json.filter((user) => {
                return user && user.name && user.name.toLowerCase().includes(value)
            });
            console.log(results);} 
            else {
                console.error("API response is not an array");
            }
        }); /* asynchronous response which converts to the api call to data json */
    
    }

    

    const handleChange = (value) => {   /*Code to make it so that the code calls the api whenever the text changes in the searchbar */
        setInput(value)
        fetchData(value)
    }  

    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon" />
            <input 
                placeholder='Type to search...' 
                value={input} 
                onChange={(e) => handleChange(e.target.value) /*set input variable to variable inside the search bar */}
            />
        </div>
    );
};
    