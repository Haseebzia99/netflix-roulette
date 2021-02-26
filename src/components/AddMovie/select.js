import React from "react";
import { Field } from "formik";

const renderOption = (option) => {
  return (
    <option key={option.value} value={option.value}>
      {option.key}
    </option>
  );
};

const renderOptions = (options) => options.map(renderOption);

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {renderOptions(options)}
      </Field>
    </div>
  );
}

export default Select;
