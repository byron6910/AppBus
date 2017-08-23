import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';
import { InicioPage } from '../inicio/inicio';
/**
 * Generated class for the LogginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggin',
  templateUrl: 'loggin.html',
})
export class LogginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogginPage');
  }
    
    goToFormulario(){
        
        this.navCtrl.push(FormularioPage);
    }
    
    goToInicio(){
        
        this.navCtrl.push(InicioPage);
    }

}
