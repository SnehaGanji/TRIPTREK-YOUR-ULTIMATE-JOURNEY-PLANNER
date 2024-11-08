import React, { useEffect, useState } from 'react';
import {FaStar} from "react-icons/fa"
function Hotels({ searchQuery, isSearch }) {
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openMarker, setOpenMarker] = useState(null); // Track currently open marker

  const loadMap = () => {
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU&libraries=places`;
      script.onload = initializeMap; // Initialize map after script is loaded
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  };

  useEffect(() => {
    loadMap();
  }, []);

  const initializeMap = () => {
    const google = window.google;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 13.6288, lng: 79.4192 },
      zoom: 10,
    });
    setMap(map);
  };

  const searchPlaces = () => {
    if (!map || !searchQuery.trim()) return;

    const google = window.google;
    const placesService = new google.maps.places.PlacesService(map);

    placesService.textSearch(
      {
        query: searchQuery + " hotel",
        type: ['restaurant', 'lodging', 'tourist_attraction'],
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
          // console.log("maps api Response:", results);
          displayPlacesOnMap(results);
          // Zoom the map to fit the bounds of the search results
          if (results.length > 0) {
            const bounds = new google.maps.LatLngBounds();
            results.forEach((place) => {
              bounds.extend(place.geometry.location);
            });
            map.fitBounds(bounds);
          }
        }
      }
    );
  };

  useEffect(() => {
    searchPlaces();
  }, [isSearch]);

  const displayPlacesOnMap = (places) => {
    const google = window.google;
    places.forEach((place) => {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
        icon: '/hotelIcon.png', // Replace with your custom marker icon URL
      });
      const ratingFunction=(rating)=>{
        Math.round(rating);
        let icons="";
        let icons1="⭐";
      for(let i=0 ; i<rating; i++){
        icons=icons+icons1;
      }
       return icons;
      }
      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="card">
          <img src="/hotel.jpg" alt="${place.name} photo" style="max-width: 100px; max-height: 100px;">
          <strong class="h3">${place.name}</strong><br>${place.formatted_address}
          <div id="rating">Rating:${ratingFunction(place.rating)} (${place.user_ratings_total}Reviews)  </div>
          
        </div>`,
      });

      marker.addListener('click', () => {
        // Close the previously open marker
        if (openMarker) {
          openMarker.infoWindow.close();
        }

        // Open the current marker's info window
        infoWindow.open(map, marker);

        // Set the current marker as the open marker
        setOpenMarker({ marker, infoWindow });

        // Display rating
       
      });
    });
  };

  return (
    <div>
      <div id="map" style={{ height: '600px', width: '70%' }} className="ms-auto me-auto"></div>
    </div>
  );
}

export default Hotels;
