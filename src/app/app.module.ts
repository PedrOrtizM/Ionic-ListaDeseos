import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {PlaceHolderPipe} from './pipes/placeholder.pipe';
import {PendientesPipe} from './pipes/pendientes.pipe';


import {PendientesComponent} from '../pages/pendientes/pendientes.component';
import {TerminadosComponent} from '../pages/terminados/terminados.component';
import {ListaDeseosService} from './services/lista-deseos.service';
import {AgregarComponent} from '../pages/agregar/agregar.component';
import {DetalleComponent} from '../pages/detalle/detalle.component';

@NgModule({
  declarations: [
    MyApp,

    PendientesComponent,
    TerminadosComponent,
    TabsPage,
    AgregarComponent,
    DetalleComponent,
    PlaceHolderPipe,
    PendientesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    PendientesComponent,
    TerminadosComponent,
    TabsPage,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
