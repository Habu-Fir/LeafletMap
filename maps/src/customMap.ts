import L from 'leaflet'
import { Company } from './Company';
import { User } from './User';

interface Mappable{
    location:{
        lat:number,
        lng:number
    }
    content():string;
}

export class CustomMap {
    private   map:L.Map;
    
constructor(divID:string){
    var mapOptions = {
        center: {
            lat:0,
            lng:0
        },
        zoom: 1
     }
 this.map = L.map((divID),mapOptions);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(this.map);
}

addMarker(mappable:Mappable):void{
 let marker = new L.Marker([mappable.location.lat,mappable.location.lat])
 marker.addTo(this.map).bindPopup(mappable.content())
}



}