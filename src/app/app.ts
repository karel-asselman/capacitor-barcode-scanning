import { Component, signal } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerCameraDirection, CapacitorBarcodeScannerScanOrientation, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('capacitor-barcode-scanning');
  barcodes: string[] = [];

 async scan(): Promise<string | null> {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHintALLOption.ALL,        
        scanText: 'scan a barcode',
        scanInstructions: 'You know what to do',
        web: {
          showCameraSelection: true,
          scannerFPS: 30,                   
        },
        cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK,
        scanOrientation: CapacitorBarcodeScannerScanOrientation.PORTRAIT,
      });
      console.log('Scan result:', result);
      this.barcodes.push(result.ScanResult);

      return result.ScanResult;
    } catch (error) {
      console.error('Error scanning barcode:', error); 
      
      return null;
    }
  } 
}
