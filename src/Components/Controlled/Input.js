import React, { useState } from "react";

const Input = props => {

    return (
        <div className="form-group">
            <label for={props.name} className="form-label">
                {props.title}
            </label>
            <input
                className="form-control"
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
