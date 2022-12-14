const request= require("request")

const geocodeURL = (address, callback) => {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/` + address + `.json?access_token=pk.eyJ1IjoiamFzcHJlZXQxMiIsImEiOiJjbGFqZHh0cHIwYzBwM3dycWY0cWx2bTN3In0.3_-PX__m_3nPn4HLL8I95g&limit=1`;
  
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to services!",undefined);
      } else if (response.body.features.length === 0) {
        callback("Unable to find location",undefined);
      } else {
       callback(undefined, {
           lat : response.body.features[0].center[0],
           long : response.body.features[0].center[1],
           location : response.body.features[0].place_name
       })
      }
    });
  };

  module.exports = geocodeURL