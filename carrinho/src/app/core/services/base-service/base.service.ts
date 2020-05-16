import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from 'src/app/models';



@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public url = 'http://localhost:7189/v1';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<ProductModel[]>(`${this.url}/products`)
    }
}