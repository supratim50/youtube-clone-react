import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

      const fetchData = async (q) => {

        const options = {
          method: 'GET',
          url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
          params: {q: q},
          headers: {
            'X-RapidAPI-Key': 'b84089edccmsh808d1bc87513972p168530jsnf4412898506f',
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
          }
        };
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.items);
            setIsLoading(false);
          } catch(e) {
            console.log(e);
          } finally {
            setIsLoading(false)
          }
      }

      // const refetch = (q) => {
      //   fetchData(q);
      // }

      // useEffect(() => {
      //   fetchData(query);
      // }, [])

      return {data, isLoading, fetchData}
}

export default useFetch;