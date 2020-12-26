import { User } from './User';
import { Company } from './Company';

// instructins to every other class
// on how they can be an arugmnto to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  name?: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Typescript see both User and Company and ONLY the properties which exists
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      label: mappable.name,
    });
  }
}
