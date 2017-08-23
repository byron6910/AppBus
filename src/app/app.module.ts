import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { LogginPage } from '../pages/loggin/loggin';
import { FormularioPage } from '../pages/formulario/formulario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      InicioPage,
      LogginPage,
      FormularioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        dayNames:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
        
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      InicioPage,
      LogginPage,
      FormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
