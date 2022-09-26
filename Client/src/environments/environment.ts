// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_API: 'http://localhost:7000/api',
  firebase: {
    projectId: 'thegrid-d1dac',
    appId: '1:1011641420685:web:08ddd1d3c502b5eb968bc4',
    databaseURL: 'https://thegrid-d1dac.firebaseio.com',
    storageBucket: 'thegrid-d1dac.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAj550DA-qQsgGxW7fE0XMLpuEEjk269MI',
    authDomain: 'thegrid-d1dac.firebaseapp.com',
    messagingSenderId: '1011641420685',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
