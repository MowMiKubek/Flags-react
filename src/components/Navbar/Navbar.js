// import Searchbar from './Searchbar/Searchbar'
import Continents from './Continents/Continents'
import styles from './styles.module.css'

export default function Navbar(props) {
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    return (
        <nav className={styles.navbar}>
            <Continents 
                data={regions} 
                value={props.region} 
                setValue={props.setRegion} />
            {/* <Searchbar text={props.text} setTgitext={props.setText} /> */}
            {/* <Searchbar /> */}
        </nav>
    )
}