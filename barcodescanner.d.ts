declare module "nativescript-barcodescanner" {
    /**
     * The options object passed into the scan function.
     */
    export interface ScanOptions {
      /**
       * A comma sep. string of barcode types: "QR_CODE,PDF_417"
       * Default: empty, so all types of codes can be scanned.
       */
      formats?: string;

      /**
       * The label of the button used to close the scanner.
       * Default: "Close".
       * iOS only.
       */
      cancelLabel?: string;

      /**
       * The message shown when looking for something to scan.
       * Default: "Place a barcode inside the viewfinder rectangle to scan it."
       * Android only.
       */
      message?: string;

      /**
       * Start the scanner with the front camera?
       * Default: false, so the back camera is used.
       * Android only.
       */
      preferFrontCamera?: boolean;

      /**
       * By default the scanned object is returned in the Promise,
       * but if you want to scan continuously (until you call 'stop'),
       * you can provide a callback function that receives the same object
       * as the Promise would, but every time something is scanned.
       * 
       * This function doesn't report duplicates in the same scanning session,
       * you're welcome ;)
       */
      continuousScanCallback?: Function;

      /**
       * While scanning for a barcode show a button to flip to the other camera (front or back).
       * Default: false, so no flip button is shown.
       * Android only (on iOS the button is always shown).
       */
      showFlipCameraButton?: boolean;

      /**
       * Optionally lock the orientation to 'portrait' or 'landscape'.
       * Default: "sensor", which follows the current device rotation.
       * Android only.
       */
      orientation?: string;
    }

    export function available(): Promise<boolean>;
    export function hasCameraPermission(): Promise<boolean>;
    export function requestCameraPermission(): Promise<boolean>;
    export function scan(options: ScanOptions): Promise<any>;
    /**
     * Stop scanning, particularly useful when 'scan' was used with 'continuousScanCallback'
     */
    export function stop(): Promise<any>;
}