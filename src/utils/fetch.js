import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch('https://cors-anywhere.herokuapp.com/' + url)
        .then(j => j.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
  }, [url]);
  return [data, loading];
}
export { useFetch };