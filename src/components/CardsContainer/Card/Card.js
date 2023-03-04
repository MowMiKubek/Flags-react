export default function Card(props){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.src} alt={props.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="card-text">
                <div className="info"><b>Population: </b>{props.population}</div>
                <div className="info"><b>Region: </b>{props.region}</div>
                <div className="info"><b>Capital: </b>{props.capital}</div>
            </div>
        </div>
        </div>
    )
}