// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //TOKEN_URL: 'http://ottoni.vps-kinghost.net:8000/token/',
  TOKEN_URL: 'http://127.0.0.1:8000/token/',
  //TOKEN_REFRESH_URL: 'http://ottoni.vps-kinghost.net:8000/tokenRefresh/',
  TOKEN_REFRESH_URL: 'http://127.0.0.1:8000/tokenRefresh/',

  //API: 'http://ottoni.vps-kinghost.net:8000/api/',
  API: 'http://127.0.0.1:8000/api/',

  BASE_URL: '/api'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
