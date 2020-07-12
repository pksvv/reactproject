import React from 'react';

const Display = (props)=>{
    console.log(props);

    const listUser = ({userdata})=>{
        return userdata.map((item,index)=>{
            return(
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{String(item.isActive)}</td>
                </tr>
            )
        })

    }

    return(
        <div>
            <h4 id="title">React Dynamic Table</h4>
            <table id="userData" border="1px solid black">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>isActive</th>
                </tr>
                </thead>
                <tbody>
                    {listUser(props)}
                </tbody>
            </table>
        </div>
    )
}

export default Display;