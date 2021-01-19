import React from 'react'

function Table(props) {
  // console.log(props.employees)
  const employees = props.employees

    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees) => (
          <tr>
            <td><img src = {employees.picture.large} alt = ""></img></td>
            <td>{employees.name.first}</td>
            <td>{employees.name.last}</td>
            <td>{employees.cell}</td>
            <td>{employees.email}</td>
          
          </tr>

          ))}
           
        </tbody>
      </table>
    )
}

export default Table
