import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
//Componentes.
import { HomeComponent} from './components/home.component';
//Componente de pagina de error.
import { ErrorComponent} from './components/error.component';
//Componente de listado de productos.
import { ProductosListComponent} from './components/producto-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent
  ],
  imports: [
    BrowserModule,
    routing
      
  ],
  //Para que todo funcione debemos importar el appRoProviders
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
