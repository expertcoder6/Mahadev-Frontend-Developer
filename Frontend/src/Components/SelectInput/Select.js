import React from 'react'



export const Select = ({ defaultValue, className, label, labelId, value, options, id, name, onChange }) => {

    return (
        <div className="mb-4">
            <label id={labelId} className="block text-gray-700 text-sm font-bold mb-2" for="username">
                {label}
            </label>
            <select
                className={className}
                id={id}
                labelId={labelId}
                name={name}
                label={label}
                value={value}
                defaultValue={defaultValue}
                type="select"
                onChange={onChange}
            >
                <option selected value={''}>All</option>
                {
                    options?.length && options?.map((ele, i) => {
                        return (
                            <option key={i} value={ele}>
                                {ele}
                            </option>
                        )

                    })
                }
            </select>
        </div>
    )

}