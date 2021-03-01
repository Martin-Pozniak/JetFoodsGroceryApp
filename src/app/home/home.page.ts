import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('map') mapElementRef: ElementRef;

  constructor( private renderer: Renderer2 ) {}

  public ngAfterViewInit() {

    this.getGoogleMaps()
    .then( googleMaps => {

      const mapElement = this.mapElementRef.nativeElement;

      const map = new googleMaps.Map(mapElement, {
        center: {
          lat: 41.48169,
          lng: -87.68463
        },
        zoom: 16
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapElement, 'visible');
      });

      map.addListener('click', event => {
        const selectedCoords = { lat: event.latlng.lat(), lng: event.latlng.lon()}
      });

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

}
