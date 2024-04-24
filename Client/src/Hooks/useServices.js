import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:8000/api/v1/get-all-services')
        .then(res => res.json())
        .then(data => setServices(data.services));
    },[services]);
    return [services, setServices];
}
export default useServices;