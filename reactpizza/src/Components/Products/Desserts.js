import React from 'react'
import { Data, DataTwo } from './Data'
import {
    ProductContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductButton,
    ProductDsc,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductTitle
} from './ProductElements';

const Product = (heading, data) => {
    return (
        <ProductContainer >
            <ProductHeading>Hot and Tasty</ProductHeading>
            <ProductWrapper>
                {DataTwo.map((product,index)=>{
                    return(
                        <ProductCard key={index}  >
                            <ProductImg data-aos="fade-up-right"data-aos-duration="3000" src={product.image} alt={product.alt}/> 
                             <ProductInfo data-aos="fade-up"
                              data-aos-anchor-placement="bottom-bottom"
                              data-aos-duration="3000">
                                 <ProductTitle>{product.name}</ProductTitle>
                                 <ProductDsc>{product.dsc}</ProductDsc>
                                 <ProductPrice>{product.price}</ProductPrice>
                                 <ProductButton>{product.button}</ProductButton>
                             </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
