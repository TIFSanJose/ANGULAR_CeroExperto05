import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeEs);
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipe/capitalizado.pipe';
import { DomseguroPipe } from './pipe/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide  : LOCALE_ID, 
      useValue : 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
