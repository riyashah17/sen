import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';



const InputGroup = ({
    name,
    placeholder,
    value,

    type,
    onChange,
    error,
    icon,

}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon} />
                </span>
            </div>
        <input
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    icon: PropTypes.string,
}

InputGroup.defaultProps = {
    type: 'text',
}

export default InputGroup;