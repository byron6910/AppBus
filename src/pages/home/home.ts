import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
//import { InicioPage } from '../inicio/inicio';
import { LogginPage } from '../loggin/loggin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  goToSlide() {
    this.slides.slideTo(2, 1000);
  }

 slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

goToLoggin(){
    this.navCtrl.push(LogginPage);
    
}

}
