import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Userentity } from '../userentity';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userEntity : Userentity = new Userentity();
  constructor(private userService :UserService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
  saveUser(){
    this.userService.createUser(this.userEntity).subscribe(data => {
      console.log(data);
      this.goToUserList();
  },
  error =>console.log(error));
}
goToUserList(){
  this.router.navigate(['/getAllUser']);
}
  
  onSubmit(){
      console.log(this.userEntity);
      this.saveUser();
  }

}
  

