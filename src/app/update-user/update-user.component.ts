import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Userentity } from '../userentity';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId : number;
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

  

  onSubmit(){
     this.userService.updateUser(this.userId,this.userEntity).subscribe(data=>{
       this.goToUserList();
     },error=>console.log(error))
  }
  goToUserList(){
    this.router.navigate(['/userentity']);
  }
 
  
}
