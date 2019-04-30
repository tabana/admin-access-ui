import React from 'react'

const Radio = props => {

    const { title } = props
    const { name } = props
    const { onChange } = props
    const { options } = props
    const { selectedOption } = props

    return (
        <div className="form-group">
            <label for={name} className="form-label">
                {title}
            </label>
            <div className="radio">
                {options.map(option => {
                    return (
                        <label key={option} className="radio-inline">
                            <input
                                onChange={onChange}
                                value={option}
                                checked={selectedOption === option}
                                type="radio" />
                            {option}
                        </label>
                    )
                })}
            </div>
        </div>
    );
};

export default Radio;
