import React from 'react'

const TextInputs = ({ type, label, handleInput, name, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}:</label>
            <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleInput}
            />
        </div>
    )
}

export default TextInputs
