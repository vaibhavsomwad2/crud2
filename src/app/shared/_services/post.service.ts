import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Ipost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrlPost:string = environment.baseUrl;
  constructor(private _http:HttpClient) { }

  getPostAll():Observable<Ipost[]>{
    return this._http.get<Ipost[]>(this.baseUrlPost)
  }
  getSingalePost(id:number):Observable<Ipost>{
    let singalId = `${this.baseUrlPost}/${id}`
    return this._http.get<Ipost>(singalId)
  }
  getDeletePost(id:number):Observable<{}>{
    let deleteUrl = `${this.baseUrlPost}/${id}`;
    return this._http.delete<{}>(deleteUrl);
  }
  getCreatePost(obj:Ipost):Observable<Ipost>{
    return this._http.post<Ipost>(this.baseUrlPost,obj)
  }
  getUpdate(id:number,obj:Ipost):Observable<Ipost>{
    let updateId = `${this.baseUrlPost}/${id}`
    return this._http.patch<Ipost>(updateId,obj)
  }
}
