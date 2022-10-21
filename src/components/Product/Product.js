import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import PropTypes from "prop-types";

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => {
                return <li key={index}><button type="button" onClick={() => changeCurrentSize(size.name) } className={clsx(size.name === currentSize ? styles.active : undefined )}>{size.name}</button></li>
              })}
              
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => {
                return  <li key={color}><button type="button" onClick={() => changeCurrentColor(color)}  className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>
              })}
            </ul>
          </div>
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