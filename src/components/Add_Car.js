import React from 'react';

export default function Add_Car (props){
     return(
        <div>
            <div className='align'>
                <h1>Car Information</h1>
                <label>VIN:</label><input type=''/>
                <label>Year:</label><input type=''/>
                <label>Make:</label><input type=''/>
                <label>Model:</label><input type=''/>
                <label>VLT:</label><input type=''/>
            </div>
            <div className='align'>
                <h1>Warranty</h1>
                <label>Front Door Windows:</label><input type=''/>
                <label>Rear Door Windows:</label><input type=''/>
                <label>Back Window:</label><input type=''/>
                <label>Type:</label><input type=''/>
            </div>
            <h1>Customer Information</h1>
            <label>Name:</label><input type=''/>
            <label>Phone:</label><input type=''/>
            <h1>Price</h1>
            <label>$</label><input type='' className=''/>
            <br/>
            <button name='addCar' onClick={(e)=>{props.handleToggle(e)}}>Cancel</button>
        </div>
     )
}