import { useEffect, useState } from "react";

const useProductDetail = (productId) =>{
    const [product, setProduct] = useState({});
    useEffect( () =>{
        const url = `http://localhost:8000/api/v1/get-single-inventory/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data.inventory));    
    }, [productId, product]);
    console.log(product, 'test');
    return [product, setProduct]
}

export default useProductDetail;