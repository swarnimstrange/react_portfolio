import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="col-md-6 form-group">
      <input
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
        placeholder={placeholder}
      />
      
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}


export const EField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="form-group">
        <input
          className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
          placeholder={placeholder}
        />
        
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    )
  }

  export const MField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="form-group">
        <textarea
          className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
          placeholder={placeholder}
        />
        
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    )
  }