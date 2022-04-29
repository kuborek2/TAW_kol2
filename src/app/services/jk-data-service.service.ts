import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JKDataServiceService {

  private url = "https://taw-posts.herokuapp.com";

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get(this.url + "/api/posts");
  }

  public getById(id: string){
    return this.http.get(this.url + "/api/posts" + id);
  }
}


