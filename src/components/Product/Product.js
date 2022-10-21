import styles from './Product.module.scss';
// import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from "prop-types";
import ProductImage from '../ProductImage/ProductImage';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  const [currentColor, setCurrentColor] = useState(props.colors[2])
  
  
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }
  
  const changeCurrentColor = (item) => {
     return setCurrentColor(item)
  }
  
  const changeCurrentSize = (item) => {
    return setCurrentSize(item)
  } 
  
  const getPrice = () => {
   
    const sizeData = props.sizes.find(size => size.name=== currentSize)
    return sizeData.additionalPrice + props.basePrice;
  }
  
  const addToCard = (event) => {
    event.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('name: ', props.title);
    console.log('price: ', getPrice());
    console.log('size: ', currentSize);
    console.log('color:', currentColor );
  }
  
  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} name={props.name} />
     
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form>
          <OptionSize sizes={props.sizes} size={props.size} changeCurrentSize={changeCurrentSize} currentSize={currentSize}/>
          
          <OptionColor colors={props.colors} changeCurrentColor={changeCurrentColor} prepareColorClassName={prepareColorClassName} currentColor={currentColor} color={props.color}/>
          {/* <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => {
                return  <li key={color}><button type="button" onClick={() => changeCurrentColor(color)}  className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>
              })}
            </ul>
          </div> */}
          <Button className={styles.button} addToCard={addToCard} >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;