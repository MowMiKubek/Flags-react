import styles from './styles.module.css'
import Logo from '../../moon.svg'
export default function Header (props) {
    return (
        <header className={styles.header}>
            <h1>Where in the world?</h1>
                <h2>
                    <img 
                    src={Logo}
                    style={{transform: "scale(1.5) translate(-4px, -2px)"}}
                    alt="theme"
                    />
                    Dark mode
                </h2>
        </header>
    )
}