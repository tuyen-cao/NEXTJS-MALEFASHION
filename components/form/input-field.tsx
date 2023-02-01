import { InputFieldProps } from '@/models'
import React from 'react'
import { useController } from 'react-hook-form'

export const InputField: React.FC<InputFieldProps> = ({ 
    name, label, control,
    onChange: externalOnChange,
    onBlur:externalOnBlur,
    value: externalValue,
    ref: externalRef,
    ...rest }) => {
    const {
        field: { value, onBlur, onChange, ref },
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
    } = useController({
        name,
        control,
    });

    return (
        <div className="form-group">
            <label>{name}</label>
            <input
                className="form-control"
                onChange={onChange} // send value to hook form 
                onBlur={onBlur} // notify when input is touched/blur
                value={value} // input value
                name={name} // send down the input name
                ref={ref} // send input ref, so we can focus on input when error appear
                {...rest}
                
            />
            {/* <small id="emailHelp" className="text-danger form-text">
                emailError
            </small> */}
        </div>
    )
}
