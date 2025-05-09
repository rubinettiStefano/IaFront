import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from './quiz';

@Injectable({
  providedIn: 'root'
})
export class ParlaIaService {

  constructor(private http:HttpClient) { }

  generaDomanda(topic:string)
  {
    return this.http.get<Quiz>('/api/ia/domanda?topic='+topic);
  }
}
