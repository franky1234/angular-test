import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';

const BASE_URL = `http://localhost:3000/`;

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersList(): Observable<any> {
    return this.http.get(`${ BASE_URL }users`);
  }
  getAllPosts(): Observable<any> {
    return this.http.get(`${ BASE_URL }posts`);
  }
  getPictureURL(id: number): Observable<any> {
    return this.http.get(`${ BASE_URL }photos/${ id }`);
  }
  getSinglePost( id: number): Observable<any> {
    return this.http.get(` ${ BASE_URL }posts/${ id }`);
  }
  updatePostInfo( id: number, newPost: Object ): Observable<any> {
    return this.http.put(`${ BASE_URL }posts/${ id }`, newPost);
  }
  saveNewPost( newPost: Object): Observable<any> {
    return this.http.post(`${ BASE_URL }posts`, newPost);
  }
}
