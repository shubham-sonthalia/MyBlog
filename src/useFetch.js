import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() =>{
        const abortcontroller = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortcontroller.signal}).then(res => {
            if(!res.ok){
                throw Error('Couldnot fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
        }).catch(err => {
            if(err.name === "AbortError"){
                console.log('Fetch aborted');
            }
            else
            {
                setIsPending(false);
                setError(err.message);
            }
        })
        }, 1000)
    
    return () => abortcontroller.abort();
    }, [url]);
    return {data, isPending, Error}
}
export default useFetch;

