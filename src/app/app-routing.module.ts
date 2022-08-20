import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenRequestComponent } from './components/token-request/token-request.component';

const routes: Routes = [
  {
    path: 'token-request', component: TokenRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
