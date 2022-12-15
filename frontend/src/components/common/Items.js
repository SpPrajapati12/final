import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Items = ({ currentItems }) => {

  const [state, setState] = useState(currentItems)
  const [filter,setFilter] = useState("")

  useEffect(() => {
    if (currentItems) {
      setState(currentItems)
      console.log("hii")
    }
  }, [currentItems])


  const handleAsc = () => {
    setState([...state].sort((a, b) => {
      return a.id - b.id
    }))
  }
  const handleDesc = () => {
    setState([...state].sort((a, b) => {
      return b.id - a.id
    }))
  }
  const handleAscwithname = () => {
    setState([...state].sort((a, b) => {
      return a.name > b.name ? 1 : -1
    }))
  }
  const handleDescwithname = () => {
    setState([...state].sort((a, b) => {
      return a.name > b.name ? -1 : 1
    }))
  }

  const sorting = (name) => {
    if (name === "asc") {
      setState([...state].sort((a, b) =>a.id - b.id ))
    } else if (name === "dsc") {
      setState([...state].sort((a, b) => b.id - a.id))
    } else if (name === "aname") {
      setState([...state].sort((a, b) =>a.name > b.name ? 1 : -1 ))
    } else if(name === "bname") {
      setState([...state].sort((a, b) => a.email > b.email ? 1 : -1))
    }
  }

  const searech = () => {
    return 
  }

  const handleChange = (e) => {
    sorting(e.target.value)
  }
  return (
    <div>
      <div>
        <input type="text" class="form-control" placeholder='Search...' onChange={(e) => setFilter(e.target.value) } />
        <select className="form-select" aria-label="Default select example" onChange={handleChange}>
          <option selected>Open this select menu</option>
          <option value="asc">Asc By id</option>
          <option value="dsc">Dsc By id</option>
          <option value="aname">Aname</option>
          <option value="bname">Dname</option>
        </select>
        <button onClick={handleAsc}>Asc</button>
        <button onClick={handleDesc}>Desc</button>
        <button onClick={handleAscwithname}>AscWithName</button>
        <button onClick={handleDescwithname}>DescWithName</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {state && state.filter((item) => item.name.toLowerCase().includes(filter)).map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Items
