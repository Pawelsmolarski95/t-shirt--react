import styles from './OptionSize.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types'
import shortid from 'shortid';

const OptionSize = (props) => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={shortid()} ><button type="button" onClick={() =>  { props.changeCurrentSize(size.name) ; props.setAdditionalPrice(size.additionalPrice)  }} className={clsx(size.name === props.currentSize ? styles.active : undefined )}>{size.name}</button></li>
              )}
              
            </ul>
          </div>
    )
};

OptionSize.propTypes = {
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  changeCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize