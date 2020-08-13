import React from "react";

import './index.css';

function Average(props){
    let items = [];
    let total = 0;
    if(!(localStorage.getItem('listOfTimes') === null)){
        items = JSON.parse(localStorage.getItem('listOfTimes'))
        for(let i = 0; i < items.length; i++){
            total += items[i];
        }
    }

    let average = 0;
    if(items.length>0){
        average = total/items.length;
    }    
    let seconds, minutes
    if(average > 0){
        seconds = ("0" + (Math.floor(average / 1000) % 60)).slice(-2);
        minutes = ("0" + (Math.floor(average / 60000) % 60)).slice(-2);
    }
    else{
        seconds = '00'
        minutes = seconds

    }
    localStorage.setItem('average', Math.round(average))
    return(
        <div className="average-display timer-page-text">
            Average Time Between Voters

            <div className="time-text">
                {minutes} : {seconds} 
            </div>
        </div>

        
    );
}
export default Average;