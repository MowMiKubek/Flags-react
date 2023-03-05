export default function Continents (props) {
    return (
        // <select className="form-select w-25">
        //     <option value="">Filter by region</option>
        //     <option value="Africa">Africa</option>
        //     <option value="America">America</option>
        //     <option value="Asia">Asia</option>
        //     <option value="Europe">Europe</option>
        //     <option value="Oceania">Oceania</option>
        // </select>
        <select 
        className="form-select w-25" 
        value={props.value}
        onChange={e => props.setValue(e.target.value)}>
            <option value="">Filter by region</option>
            {props.data.map(region => (
                <option 
                    key={region}
                    value={region}
                    // selected={props.value === region ? true: false}
                    >{region}
                </option>
            ))}
        </select>
    )
}