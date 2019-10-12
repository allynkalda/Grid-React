import { useState, useEffect } from "react";

const header = {
  "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
  "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
}

function useFetch(url, header) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(url)
        .then(j => j.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
  }, [url]);
  return [data, loading];
}
export { useFetch };