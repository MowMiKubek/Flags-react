import Card from './Card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

import styles from './styles.module.css'

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

    flagsData.map(elem => (
    (elem.capital && elem.capital.length > 1) ? 
        console.log(elem.name.common, elem.capital)
        : null
    ))
    
    const content = (
        flagsData.length
            ? flagsData.map(elem => (
                <Card
                    key={elem.cca2} 
                    src={elem.flags.png} 
                    alt={elem.flags.alt} 
                    name={elem.name.common}
                    population={elem.population}
                    region={elem.region}
                    capital={
                        (elem.capital && elem.capital.length > 1)
                        ? elem.capital.join(' ')
                        : elem.capital
                    }
                    />
            ))
            : <p>Jeszcze nic tu nie ma</p>
    )

    return (
        <div className={`${styles.cardContainer}`}>
            {/* <h2>CardsContainer</h2> */}
            {content}
        </div>
    )
}