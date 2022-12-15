import React, { useEffect, useState } from 'react'
import TextInputs from '../../element/TextInputs'

import "./admin.css"



const Admin = () => {


  const [state, setState] = useState({
    name: "",
    department: "",
    designation: "",
    role: "",
  })

  const handleInput = (e) => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preveneDefault()
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item " aria-current="page">Admin</li>
        </ol>
      </nav>
      <div className="component">
        <div className="col">
          <div className="row admin_header">
            <h5>Admin Form</h5>
          </div>
          <form>
            <div className="row admin_form mt-2 mb-4">
              <div className="col">
                <TextInputs
                  label="Name"
                  type="text"
                  handleInput={handleInput}
                  name="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="col">
                <TextInputs
                  label="Department"
                  type="text"
                  handleInput={handleInput}
                  name="department"
                  placeholder="Enter department"
                />
              </div>
              <div className="col">
                <TextInputs
                  label="Designation"
                  type="text"
                  handleInput={handleInput}
                  name="designation"
                  placeholder="Enter designation"
                />
              </div>
            </div>
            <div className="row admin_form mt-2 mb-4">
              <div className="col">
                <TextInputs
                  label="Role"
                  type="text"
                  handleInput={handleInput}
                  name="role"
                  placeholder="Enter Role"
                />
              </div>
            </div>
            <div className="row admin_form d-flex justify-content-end">
              <button className='btn mr-4 admin_form_btn'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Admin