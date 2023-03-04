export default function Card(props){
    return (
        <div>
            <p>Card</p>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}