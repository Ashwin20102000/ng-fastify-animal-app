import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Animal{
  id:string;
  name:string;
  count:number
}
@Injectable({
  providedIn: 'root'
})
export class ZooService {
  baseServerUrl = 'http://localhost:8000'
  constructor(public http:HttpClient) { }
  getAnimals():Observable<{animals:Animal[]}>{
    return this.http.get(this.baseServerUrl+'/animals') as Observable<{
      animals:Animal[]
    }>
  }
  postAnimals(animal:Animal):Observable<{animals:Animal[]}>{
    return this.http.post(this.baseServerUrl+'/animals',{
      animal
    }) as Observable<{
      animals:Animal[]
    }>
  }
  patchAnimal(animal:Animal):Observable<{animals:Animal[]}> {
    return this.http.patch(this.baseServerUrl+'/animals'+animal.id,{
      animal
    }) as Observable<{
      animals:Animal[]
    }>
  }
  deleteAnimal(animal:Animal):Observable<{animals:Animal[]}>{
    return this.http.delete(this.baseServerUrl+'/animals'+animal.id
      ) as Observable<{
      animals:Animal[]
    }>
  }
}
