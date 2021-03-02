import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.scss'],
})
export class StoreLocatorComponent implements AfterViewInit {

  @ViewChild('map') mapElementRef: ElementRef;

  // MEMBERS
  parkForestLocation = { lat: 41.48169, lng: -87.68463 };
  carolStreamLocation = { lat: 41.9125, lng: -88.1348 };
  harveyLocation = { lat: 41.6100, lng: -87.6467 };
  napervilleLocation = { lat: 41.7508, lng: -88.1535 };
  rockfordLocation = { lat: 41.2711, lng: -89.0940 };
  stPaulLocation = { lat: 44.9537, lng: -93.0900 };

  constructor( private renderer: Renderer2 ) { }

  public ngAfterViewInit() {
    console.log("In StoreLocator AfterViewInit");

    this.getGoogleMaps()
    .then( googleMaps => {

      const mapElement = this.mapElementRef.nativeElement;

      const map = new googleMaps.Map(mapElement, {
        center: {
          lat: 41.48169,
          lng: -87.68463
        },
        zoom: 14
      });

      this.addStoreLocationMarkers( googleMaps, map );

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapElement, 'visible');
      });

      // map.addListener('click', event => {
      //   const selectedCoords = { lat: event.latlng.lat(), lng: event.latlng.lon()}
      // });

    })
    .catch( error => {

      //MP - make some fallback pretty error.
      console.log(error);

    });

  }

  private getGoogleMaps(): Promise<any> {

    const win = window as any;
    const googleModule = win.google;

    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }

    return new Promise( (resolve, reject) => {

      const script = document.createElement('script');

      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4VYAAckFN1Khtj0XDrkMHw-jXWBkStIU';
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      script.onload = () => {

        const loadedGoogleModule = win.google;

        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve (loadedGoogleModule.maps);
        }
        else {
          reject('Google Maps Not Available');
        }

      }

    });

  }

  public addStoreLocationMarkers( googleMaps, map ) {

    new googleMaps.Marker({
      position: this.parkForestLocation,
      map,
      title: "Park Forest Location",
    });

    new googleMaps.Marker({
      position: this.carolStreamLocation,
      map,
      title: "Carol Stream Location",
    });

    new googleMaps.Marker({
      position: this.rockfordLocation,
      map,
      title: "Rockford Location",
    });

    new googleMaps.Marker({
      position: this.harveyLocation,
      map,
      title: "Harvey Location",
    });

    new googleMaps.Marker({
      position: this.napervilleLocation,
      map,
      title: "Naperville Location",
    });

    new googleMaps.Marker({
      position: this.stPaulLocation,
      map,
      title: "St. Paul Location",
    });

  }

}
