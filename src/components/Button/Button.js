import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const Button = (props) => {
    return (<button onClick={props.addToCard} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    addToCard: PropTypes.func.isRequired
}

export default Button;