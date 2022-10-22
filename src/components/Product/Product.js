import styles from './Product.module.scss';
// import clsx from 'clsx';

import { useState } from 'react';
import PropTypes from "prop-types";
import ProductImage from '../ProductImage/ProductImage';
import { useMemo } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  const [currentColor, setCurrentColor] = useState(props.colors[2])
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  const [additionalPrice, setAdditionalPrice] = useState('');
  
  
  
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }
  
  const changeCurrentColor = (item) => {
     return setCurrentColor(item)
  }
  
  const changeCurrentSize = (item) => {
    return setCurrentSize(item)
  } 
  
  
  useMemo(() => {
    
    setCurrentPrice(additionalPrice + props.basePrice)
  },[additionalPrice, props.basePrice])
  
  const addToCard = (event) => {
    event.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('name: ', props.title);
    console.log('price: ', currentPrice);
    console.log('size: ', currentSize);
    console.log('color:', currentColor );
  }
  
  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} name={props.name} />
     
      <ProductForm 
            
          prepareColorClassName={prepareColorClassName} 
          sizes={props.sizes} 
          size={props.size}  
          changeCurrentSize={changeCurrentSize}  
          currentColor={currentColor} 
          addToCard={addToCard} 
          color={props.color}
          changeCurrentColor={changeCurrentColor} 
          colors={props.colors} 
          currentSize={currentSize}
          setAdditionalPrice={setAdditionalPrice}
          currentPrice={currentPrice}
          />
        
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