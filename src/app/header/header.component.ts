import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public accountsService: AccountsService) {}
}
