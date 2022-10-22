import styles from './ProductForm.module.scss'
import Button from '../Button/Button';
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types'


const ProductForm = props => {
    return(
        <div>
            <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>{props.getPrice()}$</span>
            </header>
            <form>
                <OptionSize sizes={props.sizes}  changeCurrentSize={props.changeCurrentSize} currentSize={props.currentSize} />
                <OptionColor colors={props.colors} changeCurrentColor={props.changeCurrentColor} currentColor={props.currentColor} />
                <Button className={styles.button} addToCard={props.addToCard} >
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    )
};
ProductForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    changeCurrentSize: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    changeCurrentColor: PropTypes.func.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    addToCard: PropTypes.func.isRequired,
}

export default ProductForm