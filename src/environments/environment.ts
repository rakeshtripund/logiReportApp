// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  secretKey: "400c8cad7dbe5995f30173b6f6105412379e7648e92ed28c79f9a591495b8e27",
  jdbcUrl:"jdbc:sqlserver://sql-eus-tma7-tst.database.windows.net;DatabaseName=WebTMA7_Tripund;encrypt=true;trustServerCertificate=true"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
