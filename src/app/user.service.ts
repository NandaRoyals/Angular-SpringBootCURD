import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userentity } from './userentity';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({


  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:8080/user/getAllUser";
  private createURL="http://localhost:8080/user/newUser";
  private updateURL="http://localhost:8080/user/Updateuser";
  private deleteURL="http://localhost:8080/user/softDelete";
  
  constructor(private httpClient : HttpClient) { }
  getAllUserList() : Observable <Userentity[]>{
    return this.httpClient.get<Userentity[]>(`${this.baseURL}`);
}
createUser(userentity : Userentity) :Observable<object>{
  return this.httpClient.post(`${this.createURL}`,userentity);
}
updateUser(userId :number,userentity : Userentity) :Observable<object>{
  return this.httpClient.post(`${this.updateURL}/${userId}`,userentity);
}

deleteUser(userId: number) :Observable<object>{
  return this.httpClient.delete(`${this.deleteURL}/${userId}`);
}
getUserById(userId : number) : Observable<Userentity>{
  return this.httpClient.get<Userentity>(`${this.baseURL}/${userId}`);

}

} 