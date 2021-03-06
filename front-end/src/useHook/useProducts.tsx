import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../types'

export default function useProducts(valueSearch: any | null): [Error | null,Product[]] {
    const {productList} = useSelector((state: any) => state.product)
    const [productFilterList, setProductFilterList] = useState <Product[]> ([]);
    const [error, setError] = useState<any>(null);
    const dispatch = useDispatch()
    let filteredData: Product[] = [];
    const {brand, color, price, category} = valueSearch;
    
    const getProduct = async () =>  {
         dispatch({
          type: "GET_PRODUCT_LIST_SAGA",
          payload: {
            valueSearch: valueSearch
          }
        })
   

      }
      useEffect(() => {
        getProduct() 
      }, [valueSearch])



    return [error,productList]
}
