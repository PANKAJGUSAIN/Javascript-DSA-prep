import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';


const customReactQuery = (urlPath) => {

  const [apiresponse, setapiresponse] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();  // using abort controller incase multiple calls 

    // reason we need to use async await and not promises . to achieve this will use IIFE
    // putting ; for saftey purpose 
    ; (async () => {

      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath, {
          signal: controller.signal
        });
        console.log(response.data);
        setapiresponse(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request cancelled', error.message)
        }
        else {
          setLoading(false);
          setError(true);
        }
      }

    })();

    // Cleanup function to abort the request
    return () => {
      controller.abort();
    };

  }, [])

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(urlPath);
      console.log(response.data);
      setapiresponse(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return [apiresponse, error, loading, fetchData]

}

function App() {

  const [apiresponse, error, loading, fetchData] = customReactQuery('/api/products')

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1> Something went wrong </h1>
  }

  return (
    <>
      <h1> Products </h1>
      <h2> Numbers of Product are : {apiresponse.length}  </h2>
      <button onClick={fetchData} >Fetch again</button>
    </>
  )
}

export default App
