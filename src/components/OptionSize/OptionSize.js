import styles from './OptionSize.module.scss'
import clsx from 'clsx';


const OptionSize = (props) => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => {
                return <li key={index}>
                    <button type="button" onClick={() => props.changeCurrentSize(size.name) } className={clsx(size.name === props.currentSize ? styles.active : undefined )}>{size.name}</button></li>
              })}
              
            </ul>
          </div>
    )
};



export default OptionSize