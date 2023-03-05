import Searchbar from './Searchbar/Searchbar'
import Continents from './Continents/Continents'
import styles from './styles.module.css'

export default function Navbar(props) {
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    return (
        <nav className={styles.navbar}>
            <Searchbar text={props.text} setText={props.setText} />
            <Continents 
                data={regions} 
                value={props.region} 
                setValue={props.setRegion} />
        </nav>
    )
}