import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})

export class AccountsComponent {
  constructor(public accountsService: AccountsService) { }
// users = DUMMY_USERS;
// selectedUser:object;
// selectedUserIndex:Number;

// onSelectUser(i: number) {
//   this.selectedUser = this.users[i]
//   this.selectedUserIndex=i;
//   }


//   imagePath(i:string) {
// return "app/assets/"+this.users[i].image;
//   }

  
}
