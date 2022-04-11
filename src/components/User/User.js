import React from 'react';


const User = ({user:{id, name, username}, chosenUser}) => {
    return (
        <div>
            {id}---{name}---{username}
            <button onClick={()=> chosenUser(id)}>GET DETAILS</button>
        </div>
    );
};

export default User;