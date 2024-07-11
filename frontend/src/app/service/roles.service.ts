// roles.service.ts
import { Injectable } from '@angular/core';
import { Role } from '../interfaces/roles';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RolesService {
  

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient){
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/roles/';

  }

  getListRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
    
}


