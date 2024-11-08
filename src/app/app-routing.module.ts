import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'calculator', component: CalculatorComponent },
  {path: 'home', component: HomeComponent},
  {path: 'accounts', component: AccountsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
