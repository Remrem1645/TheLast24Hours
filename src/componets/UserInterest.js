import React, { useState } from "react";
import Interests from "./Interests";


function UserInterests () {

    let localUser;
    
    try{
        localUser = JSON.parse(localStorage.getItem('userData'));
    } catch {
        localUser = [];
    }


    const [interest, setInterest] = useState(null)
    const [list, setList] = useState(localUser);

    const handleSubmit = (handledata) => {
        handledata.preventDefault();
        const userInterest = {interest}
        if(interest){
            setList((list) => [...list, userInterest])
            setInterest("")
        }
    }

    const handleRemove = (interest) => {
        const newList = list.filter((mapData) => mapData.interest !== interest);
        setList(newList);
    }

    return (
        <div>
            <h2>Preference</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(data) => setInterest(data.target.value)} />
                <button>Add</button>
            </form>
            {
            localStorage.setItem('userData', JSON.stringify(list))
            }
            {
                list.map((mapData) => 
                <div>
                    <li id={mapData.interest}>{mapData.interest}</li>
                    <button type="button" onClick={() => handleRemove(mapData.interest)}>
                        Remove
                    </button>
                </div>)
            }
            <Interests list = {list} />
        </div>
    )
}

export default UserInterests




