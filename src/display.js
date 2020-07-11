import React from 'react';

const Display = (props)=>{
    console.log(props);

    const listUser = ({userdata})=>{
        return userdata.map((item,index)=>{
            return(
                <div>
                    <h2>ID: {item._id}</h2>
                    <h4>Name:{item.name}</h4>
                    <h4>Phone:{item.phone}</h4>
                    <h4>Email:{item.email}</h4>
                    <h4>IsActive:{item.isActive}</h4>
                </div>
            )
        })

    }

    return(
        <div>
            {listUser(props)}
        </div>
    )
}

export default Display;