import {ModuleWithProviders} from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*-- Componentes --*/
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent} from './components/producto-list.component';



const appRoutes: Routes = [
    //Objetos json
    {path: '',component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'productos', component:ProductosListComponent},
    //Esta ruta siempre debe estar al final de este objeto
    {path: '**', component:ErrorComponent}
];
//Cargarlo en el modulo de rutas.
//Cuando se cargen los servicios para que todas las rutas funcionen.
export const appRoutingProviders: any [] = [];
//Vamos a meter en la configuracion del routing,'forRoot' recibe un array de rutas y su config.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);