import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../environments/environment";
import { HttpClient } from  '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class MapService {
  map!: mapboxgl.Map;
style = 'mapbox://styles/mapbox/streets-v11';
lat = 45.899977;
lng = 6.172652;
zoom = 2
marker!: mapboxgl.Marker;
selectedCountry: any
constructor(private http: HttpClient) {
  (mapboxgl as typeof mapboxgl).accessToken =  environment.mapbox.accessToken;
}



buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: this.zoom,
    center: [this.lng, this.lat]
  })

 this.map.addControl(new mapboxgl.NavigationControl());






this.map.on('click', (e) => {
  if(this.marker){
    this.marker.remove();
  }
  this.marker = new mapboxgl.Marker()
  .setLngLat([e.lngLat.lng, e.lngLat.lat])
  .addTo(this.map);
  // this.http.get(`/geocoding/v5/mapbox.places-permanent/${e.lngLat.lng},${e.lngLat.lat}.json`).subscribe(
  //   (response) => { console.log(response); },
  //   (error) => { console.log(error); });
  this.http.get(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      e.lngLat.lng+ "," + e.lngLat.lat + ".json?access_token=" + environment.mapbox.accessToken).subscribe(
          (response:any) => { this.selectedCountry = response.features.pop(); console.log(this.selectedCountry.properties.short_code)},
          (error) => { console.log(error); });

          
  });
  // 318ed7c2aad6a3dedbb56859a02c8f22

  https://api.countrylayer.com/v2/callingcode/{pl}
  // ? access_key = 318ed7c2aad6a3dedbb56859a02c8f22

  // `https://restcountries.eu/rest/v2/name/${code}`
}
}