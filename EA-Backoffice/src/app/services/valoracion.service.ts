import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {valoracion} from '../interfaces/valoracion.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ValoracionService {
  
    private apiURL = 'http://localhost:5432/api/valoraciones/';

    constructor(private http: HttpClient) { }
  
    getall(): Observable<valoracion[]> {
      return this.http.get<valoracion[]>(this.apiURL);
    }
  
    delete(id: string): Observable<valoracion> {
      return this.http.delete<valoracion>(this.apiURL + id);
    }
  
    addVal(val: valoracion): Observable<valoracion> {
      return this.http.post<valoracion>(this.apiURL, val)
    }
  
    updateVal(val: valoracion, id: string): Observable<valoracion> {
      return this.http.put<valoracion>(this.apiURL + 'update/' + id, val)
    }
  
    /* deleteUser(id: string): Observable<User> {
      return this.http.delete<User>(this.apiURL + 'delete/' + id);
    } */
  }
  