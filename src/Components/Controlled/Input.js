import React from "react";

const Input = props => {

    const { type } = props
    const { title } = props
    const { name } = props
    const { placeholder } = props
    const { value } = props
    const { onChange } = props

    return (
        <div className="form-group">
            <label for={name} className="form-label">
                {title}
            </label>
            <input
                className="form-control"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;
