import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { Userentity } from './userentity';

const routes: Routes = [
  {path : 'Userentity', component : UserListComponent},
  {path : 'create-user',component:CreateUserComponent},
  {path :'',redirectTo:'Userentity',pathMatch:'full'},
  {path :'update-user/:userId',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
