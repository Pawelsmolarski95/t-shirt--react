import styles from './OptionColor.module.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'


const OptionColor = (props) => {
    
    
    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => {
                return <li key={color}>
                    <button type="button" onClick={() => props.changeCurrentColor(color)}  className={clsx(props.prepareColorClassName(color), color === props.currentColor && styles.active)} /></li>
              })}
            </ul>
          </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    changeCurrentColor: PropTypes.func.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
};

export default OptionColor