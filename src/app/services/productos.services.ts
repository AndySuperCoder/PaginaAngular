import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpEvent, HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Producto } from '../models/productos';
import { GLOBAL }from './global';

@Injectable()
export class ProductoService{
    public url: string;
    constructor(
        public _http: HttpClient
    )
    {
        this.url = GLOBAL.url;
    }

    getProductos(){
        return "TEXTO DESDE EL SERVICO";
    }
}