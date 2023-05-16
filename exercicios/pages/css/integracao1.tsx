import styles from './integracao1.module.css'

export default function integracao() {
    return (
        <div id={styles.integracao}>
            <div className={styles.vermelha}>
                Texto #01
            </div>
            <div className={styles.azul}>
                Texto #02
            </div>
            <div className={styles.branca}>
                Texto #03
            </div>
        </div>
        )
}