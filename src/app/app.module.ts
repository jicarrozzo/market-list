import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';

const enviroment = {
	apiKey: 'AIzaSyARfgLkXpEIkkoqU_NnWZLAAwDLQZAJm0U',
	authDomain: 'market-list-9fbc7.firebaseapp.com',
	databaseURL: 'https://market-list-9fbc7.firebaseio.com',
	projectId: 'market-list-9fbc7',
	storageBucket: 'market-list-9fbc7.appspot.com',
	messagingSenderId: '703461982313'
};

@NgModule({
	declarations: [ MyApp ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(enviroment),
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp ],
	providers: [ StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler } ]
})
export class AppModule {}
