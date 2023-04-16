import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPgeComponent } from './gifs-pge/gifs-pge.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    GifsPgeComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPgeComponent
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class GifsModule { }
