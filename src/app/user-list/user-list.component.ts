import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Userentity } from '../userentity';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   User : Userentity[];
 

  constructor(private userService : UserService,
    private router : Router){ }

  ngOnInit(): void {
   this.getAllUser();

} 
private getAllUser(){
  this.userService.getAllUserList().subscribe(data =>{
    this.User = data;
  });
}
updateUser(userId:number){
  this.router.navigate(['update-user',userId]);

}
deleteUser(userId : number){
  this.userService.deleteUser(userId).subscribe(data =>{
    console.log(data);
    this.getAllUser();

  })

}
}






