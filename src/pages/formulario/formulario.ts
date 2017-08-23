import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the FormularioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

   myForm: FormGroup;

user:[{ci:number, 
      Nombre:string,
      Apellido:string,
      Telefono:number,
      Direccion:string,
      Correo:string,
      Usuario:string,
      Password:string
    
}];

model:any={};
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

createUser(){
    
    this.user.push(this.model);
 
}
    saveData(){
    console.log(this.myForm.value);
    alert(JSON.stringify(this.myForm.value));
  }
private createMyForm(){
    return this.formBuilder.group({

      ci: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
       telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      usuario: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }

}
