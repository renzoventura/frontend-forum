import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _eventsUrl = "http://localhost:8080/post"

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<any>(this._eventsUrl);
  }

  getPost(postid){
    return this.http.get<any>(this._eventsUrl + "/" + postid);
  }

  getComments(postid){
    return this.http.get<any>(this._eventsUrl + "/" + postid + "/comments");
  }

  sendPost(post){
    return this.http.post<any>(this._eventsUrl, post);
  }

  sendComment(postid, comment){
    var myUrl = "http://localhost:8080/post/" + postid + "/comments"
    return this.http.post(myUrl, comment)
  }

}
