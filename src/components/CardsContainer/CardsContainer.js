import Card from './Card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const fetchElements = async () => {
    const result = await axios.get('https://restcountries.com/v3.1/all')
    return result.data;
}

export default function CardsContainer (props) {
    const [flagsData, setFlagsData] = useState([]);

    useEffect(() => {
       fetchElements()
            .then(contentData => {
                console.log(contentData)
                setFlagsData(contentData)
            })
    },[])

    return (
        <>
        <h2>CardsContainer</h2>
        {flagsData.length
            ? flagsData.map(elem => (
                <Card key={elem.cca2} src={elem.flags.png} alt={elem.flags.alt} />
            ))
            : <p>Jeszcze nic tu nie ma</p>
        }
        </>
    )
}