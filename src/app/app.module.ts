import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot({
      name: '__db_oneverify',
     driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  },
 ],
  bootstrap: [AppComponent],
})
export class AppModule {}
