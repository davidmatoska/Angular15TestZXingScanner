import { Component } from '@angular/core';
 import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  title = 'scanner';
  scanResult: any='';
  onCodeResult(result:string)
  {
this.scanResult=result;
  }
}
