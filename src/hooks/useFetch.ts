import { useEffect, useState } from "react"

const useFetch = <T>(url: string) => {
    
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${url}`);
            const result = await response.json();
            setData(result);
        }
        fetchData();
    },[url])
    return data;
}

export default useFetch;