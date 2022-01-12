import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CrearTarjetaComponent } from './componets/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './componets/listar-tarjeta/listar-tarjeta.component';

import { AngularFireModule } from '@angular/fire/compat';

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { environment } from '../environments/environment';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    NgxMaskModule.forRoot(maskConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
