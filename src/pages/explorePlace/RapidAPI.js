import axios from 'axios';
import { useEffect } from 'react';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {
    query: 'eiffel tower',
    lang: 'en_US',
    units: 'km'
  },
  headers: {
    'X-RapidAPI-Key': '05fa4db9a4msha534b265c4c3414p1f0688jsn7e4840292d02',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



const RapidAPI = () => {
    const getData=async()=>{
        try {
            const response = await axios.request(options);
            console.log(response.data , " my data");
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
getData()
    }, [])
  return (
    <div>RapidAPI</div>
  )
}

export default RapidAPI