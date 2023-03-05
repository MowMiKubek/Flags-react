import Card from './Card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

import styles from './styles.module.css'

const fetchElements = async () => {
    const result = await axios.get('https://restcountries.com/v3.1/all')
    return result.data;
}

var backedData = []

export default function CardsContainer (props) {
    useEffect(() => {
        if (backedData.length === 0) {
            fetchElements()
                .then(contentData => {
                    backedData = contentData
                    props.setFlagsData(contentData)
                    console.log(backedData)
                })
        } else {
            let filteredData = backedData.filter(x => 
                x.name.common.toLowerCase().includes(props.filter.toLowerCase())
            )
            if(props.region !== '')
                filteredData = filteredData.filter(x => x.continents.includes(props.region))
            props.setFlagsData(filteredData)
        }
    },[props.filter, props.region])
    
    const content = (
        props.flagsData.length
            ? props.flagsData.map(elem => (
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