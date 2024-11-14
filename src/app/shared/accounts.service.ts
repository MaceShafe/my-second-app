import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Target } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})

export class AccountsService {

    users = DUMMY_USERS;
    selectedUser = "";
    selectedUserIndex = "";


    imagePath(i: string) {
        return 'app/assets/' + this.users[i].image;
    }

    onSelectUser(i: string) {
        this.selectedUser = this.users[i];
        this.selectedUserIndex = i;
    }

    delUser(i: number) {
        this.users.splice(i,1);
    }

    addUser() {
        this.selectedUser = "";
        this.selectedUserIndex = "";

        const newUser = {
            id: "idNew",
            name: "addedName",
            image: "2.webp"
        }
        this.users.push(newUser);
    }

    updateUserID(i: number, event: Event): void {
        const target = event.target as HTMLInputElement;
        this.users[i].id = target.value;    
    }
    updateUserName(i: number, event: Event): void {
        const target = event.target as HTMLInputElement;
        this.users[i].name = target.value;    
    }
    updateUserImage(i: number, event: Event): void {
        const target = event.target as HTMLInputElement;
        this.users[i].image = target.value;    
    }

}
