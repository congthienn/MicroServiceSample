import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user_update } from '../user-detail/user-update';
import { user, user_add } from './user';
import { UsersModule } from './users.module';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userURL = `${environment.baseUrl}/api/user`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  private _refreshData = new Subject<void>();
  get RefreshData() {
    return this._refreshData;
  }
  getUsers(): Observable<any>{
    return this.http.get<any>(this.userURL).pipe(
      tap((response: any) =>{
        return response;
      })
    )
  }
  getUser(id: string): Observable<any>{
    const url = `${this.userURL}/${id}`;
    return this.http.get<any>(url).pipe(
      tap((response: any) =>{
        return response;
      }) 
    )
  }
  updateUser(user:user_update,id:string): Observable<any>{
    const url = `${this.userURL}/${id}`;
    return this.http.put<any>(url,user,this.httpOptions).pipe(
      tap((response: any) =>{
        this.RefreshData.next();
        return response;
      })
    )
  }
  adduser(user:user_add):Observable<any>{
    return this.http.post(this.userURL,user,this.httpOptions).pipe(
      tap((response:any) =>{
        this.RefreshData.next();
        return response;
      })
    )
  }
  deleteUser(id:string):Observable<any>{
    const url = `${this.userURL}/${id}`;
    return this.http.delete(url).pipe(
      tap((response: any) =>{
        this.RefreshData.next();
        return response;
      })
    )
  }
}