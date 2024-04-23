import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:8000/api/v1/get-all-inventory')
        .then(res => res.json())
        .then(data => setProducts(data.inventories));
    },[]);
    return [products, setProducts];
}
export default useProducts;