import { useState, useEffect } from "react"

function NiceSelect(props) {
    const [optionsDisplay, setOptionsDisplay] = useState(false);
    const [value, setValue] = useState(props.value);
    const [label, setLabel] = useState(null);

    const handleValue = (option) => {
        setValue(option.value);
        setLabel(option.label);
        setOptionsDisplay(false);
    }

    useEffect(() => {
        setValue(1)
    }, [])
    
    return (
        <>
            <select name={props.name} id={props.name} className="d-none">
                <option value="0">{props.placeholder}</option>
                {props.options ? props.options.map((option, key) => {
                    if (value == option.value) {
                        return (<option key={key} selected value={option.value}>{option.label}</option>)
                    } else {
                        return (<option key={key} value={option.value}>{option.label}</option>)
                    }
                }) : null }
            </select>
            <div className="custom-select-solid mb-3">
                <div className="placeholder-container d-flex justify-content-between" onClick={() => setOptionsDisplay(!optionsDisplay)}>
                    <span className="custom-select-placeholder">{label != null ? label : props.placeholder }</span>
                    <span className="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"/>
                    </svg>
                    </span>
                </div>
                <ul className={optionsDisplay ? 'open' : ''}>
                    {value == false ? null : <li onClick={() => handleValue({value: 0, label: props.placeholder})} >{props.placeholder}</li>}
                    {props.options ? props.options.map((option, key) => {
                        if (value != option.value) {
                            return (<li key={key} onClick={() => handleValue(option)} data-value={option.value}>{option.label}</li>);
                        }
                    }) : null } 
                </ul>
            </div>
        </>
    )
}

export default NiceSelect