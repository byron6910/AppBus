import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
    
  testRadioOpen: boolean;
  testRadioResult

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
      
  }
    
    public event = {
    month: '2017-08-10',
    timeStarts: '18:00',
    timeEnds: '1990-02-20'
  }

showOrigen() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Origen');

    alert.addInput({
      type: 'radio',
      label: 'Quito',
      value: 'Quito',
      checked: true
    });
    
     alert.addInput({
      type: 'radio',
      label: 'Guayaquil',
      value: 'Guayaquil'
    });
    
    
       alert.addInput({
      type: 'radio',
      label: 'Cuenca',
      value: 'Cuenca'
    });
    
    
       alert.addInput({
      type: 'radio',
      label: 'Manta',
      value: 'Manta'
    });
    
    
       alert.addInput({
      type: 'radio',
      label: 'Riobamba',
      value: 'Riobamba'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

showDestino() {
    let alert1 = this.alertCtrl.create();
    alert1.setTitle('Destino');

    alert1.addInput({
      type: 'radio',
      label: 'Quito',
      value: 'Quito',
      checked: true
    });
    
     alert1.addInput({
      type: 'radio',
      label: 'Guayaquil',
      value: 'Guayaquil'
    });
    
    
       alert1.addInput({
      type: 'radio',
      label: 'Cuenca',
      value: 'Cuenca'
    });
    
    
       alert1.addInput({
      type: 'radio',
      label: 'Manta',
      value: 'Manta'
    });
    
    
       alert1.addInput({
      type: 'radio',
      label: 'Riobamba',
      value: 'Riobamba'
    });

    alert1.addButton('Cancel');
    alert1.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert1.present();
  }

}
