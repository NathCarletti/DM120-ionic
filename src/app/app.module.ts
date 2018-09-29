import { DweetServiceProvider } from './../providers/dweet-service/dweet-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartModule } from 'angular2-highcharts';
import { TemperaturaPage } from './../pages/temperatura/temperatura';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Home,
    TemperaturaPage    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpClientModule,
    ChartModule.forRoot(require('highcharts')
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    TemperaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DweetServiceProvider
  ]
})
export class AppModule {}
