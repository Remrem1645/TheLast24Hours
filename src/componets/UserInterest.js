import React, { useState } from "react";

function UserInterests () {
    const [interest, setInterest] = useState(null)
    const [list, setList] = useState([]);

    const handleSubmit = (handledata) => {
        handledata.preventDefault();
        const userInterest = {interest}
        if(interest){
            setList((list) => [...list, userInterest])
            setInterest("")
        }
    }

    console.log(list) // EXPORT THIS DATA SOMEHOW LOL

    return (
        <div>
            <h2>Preference</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(data) => setInterest(data.target.value)} />
                <button>Add</button>
            </form>
            {
                list.map((mapData) => 
                <div>
                    <li id={mapData.interest}>{mapData.interest}</li>
                </div>)
            }
        </div>
    )
}

export default UserInterests




