import React from 'react';
//import { Link } from 'react-router-dom';

const Display2 = (props) => {
    console.warn("proptype -----",typeof props);
    const listUser = ({userdata}) => {
        if(userdata){
            return userdata.map((item,index) => {
                return(
                    //<div key={item._id}>
                    <div key={index}>
                        <h3>ID: {item._id}</h3>
                        <h3>NAME: {item.name}</h3>
                        <h3>PHONE:{item.phone}</h3>
                        <h3>isActive: {item.isActive}</h3>
                        <h3>Index: {index}</h3>
                    </div>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h5>display2.js</h5>
            {listUser(props)}
        </div>
    )
}
export default Display2;