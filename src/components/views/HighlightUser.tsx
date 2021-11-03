import React from "react";


export default function HighlightUser(props : {user : string, userData : object}){
    const { user, userData} = props;

    console.log(userData, "here is the user data");
    return(
        <div className="highlightedUserPanel">
            <div className='generic-data'>
            <h2>{user}</h2>

            </div>
        </div>
    )
}