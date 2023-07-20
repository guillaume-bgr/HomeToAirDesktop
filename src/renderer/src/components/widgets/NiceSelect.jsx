import { useState, useEffect } from "react"
import Select from 'react-select';

function NiceSelect(props) {
    return (
        <Select  className={props.className} styles={{
            control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? '#ffffff' : '#f4f4f4',
            borderRadius: 0,
            border: state.isFocused ? 'none': 'none',
            outline: 'none'
            }),
            menuList: (baseStyles, state) => ({
                ...baseStyles,
                marginTop: '0'
            }),
            option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isSelected ? '#0085FF' : state.isFocused ? '#80c1ff' : '#FFFFFF'
            })
        }} placeholder="Choisir un parc" options={props.options}/>
    )
}

export default NiceSelect