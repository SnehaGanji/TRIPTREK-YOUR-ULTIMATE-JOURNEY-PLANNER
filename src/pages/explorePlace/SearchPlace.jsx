import React, { useEffect, useState } from 'react'
import News from './News';
import "./news.css"
import axios from 'axios';
import Weather from './Weather';
import MapComponent from './MapComponent';
import RapidAPI from './RapidAPI';
import TouristPlaces from './TouristPlaces';
import Hotels from './Hotels';


const SearchPlace = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageId) => {
      setSelectedImage(imageId);
      setIsSearch(false)
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [newsArticles, setNewsArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [location, setLocation]=useState()
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [isSearch, setIsSearch] = useState(false)
    useEffect(() => {
      // Fetch news articles initially
      fetchNews();
    }, []);
  
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=672c643422494b94a7b159460c38fa2a`
        );
        const data = await response.json();
        // https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=672c643422494b94a7b159460c38fa2a
  // console.log(data);
        setNewsArticles(data.articles);
        setFilteredArticles(data.articles); // Initially set filtered articles to all articles
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    const apiKey = 'AIzaSyAC0C7gAdgW_ZUi_Z_IIcx8DR3-3VPE-hY'; //google maps api key

    const handleSearch = async (e) => {
      console.log(searchQuery,"skgjkh")
      setIsSearch(true)
      const filtered = newsArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);

      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=AIzaSyAC0C7gAdgW_ZUi_Z_IIcx8DR3-3VPE-hY`
        );
        const { results } = response.data;
        console.log(results, "locations");
        if (results && results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
        } else {
          console.log('No results found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
  return (
    <div className='backImg'>
    <div className='backImg'>
        <div className="container mt-4 " >
  
  <div className="row d-flex justify-content-center">
    
    <div className="col-md-9">
      
      <div className="card card1 p-4 mt-3">
      <div className="row mt-4 g-1 px-4 mb-5 py-2 ms-lg-5 ">
          
          <div className="col-md-2">
            
            <div  className={`card-inner p-3 d-flex flex-column align-items-center ${
                      selectedImage === 1 ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(1)}
                    >
              
              <img src="https://images.squarespace-cdn.com/content/v1/59b44ed8ccc5c5736a2f490d/1510943660097-SP9HYYGUSW4BHWDPQXIC/news.png?format=500w" width={75} />
              {selectedImage === 1 && (
                      <div className="checkmark">
                        <i className="fa fa-check" />
                      </div>
                    )}
              <div className="text-center mg-text">
                
                <span className="mg-text">News</span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            
            <div className={`card-inner p-3 d-flex flex-column align-items-center ${
                      selectedImage === 2 ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(2)}>
              
              <img src="/weather.png" width={85} />
              {selectedImage === 2 && (
                      <div className="checkmark">
                        <i className="fa fa-check" />
                      </div>
                    )}
              <div className="text-center mg-text">
                
                <span className="mg-text">Weather</span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            
            <div  className={`card-inner p-3 d-flex flex-column align-items-center ${
                      selectedImage === 3 ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(3)}>
              
              <img src="/restaurant2.png" width={50} />
              {selectedImage === 3 && (
                      <div className="checkmark">
                        <i className="fa fa-check" />
                      </div>
                    )}
              <div className="text-center mg-text">
                
                <span className="mg-text">Restaurants </span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            
            <div  className={`card-inner p-3 d-flex flex-column align-items-center ${
                      selectedImage === 4 ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(4)}>
              
              <img src="/hotel.png" width={50} />
              {selectedImage === 4 && (
                      <div className="checkmark">
                        <i className="fa fa-check" />
                      </div>
                    )}
              <div className="text-center mg-text">
                
                <span className="mg-text">Hotels</span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            
            <div  className={`card-inner p-3 d-flex flex-column align-items-center ${
                      selectedImage === 5 ? 'selected' : ''
                    }`}
                    onClick={() => handleImageClick(5)}>
              
              <img src="/tourism.png" width={50} />
              {selectedImage === 5 && (
                      <div className="checkmark">
                        <i className="fa fa-check" />
                      </div>
                    )}
              <div className="text-center mg-text">
                
                <span className="mg-text">Tourist Places</span>
              </div>
            </div>
          </div>
         
        </div>
        <h3 className="heading text-center">
          Hi! Search what you want to explore?
        </h3>
        <div className="d-flex justify-content-center px-5">
          
          <div className="search">
            
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              name=""
              value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
            />
            <a href="#" className="search-icon" onClick={handleSearch} >
              
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</div>
<div>
    {selectedImage === 1&&<News filteredArticles={filteredArticles} isSearch={isSearch}/>}
    {selectedImage===2&&<Weather latitude={latitude}  longitude={longitude} isSearch={isSearch}/>}
    {selectedImage===3&&<MapComponent searchQuery={searchQuery} isSearch={isSearch}/>}
    {selectedImage===4&&<Hotels searchQuery={searchQuery} isSearch={isSearch}/>}
    {
      selectedImage===5&&<TouristPlaces searchQuery={searchQuery} latitude={latitude}  longitude={longitude} isSearch={isSearch}/>
    }
   
</div>

    </div></div>
  )
}

export default SearchPlace
// https://maps.googleapis.com/maps/api/js?key=AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU&libraries=places