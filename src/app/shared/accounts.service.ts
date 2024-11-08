import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

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

    editUser(id: string, name:string, image:string) {
        this.selectedUser = "";
        this.selectedUserIndex = "";


        // this.selectedUser = {
        //     id: "idNew",
        //     name: "addedName",
        //     image: "2.webp"
        // }
        // this.users.push(newUser);
    }

}
