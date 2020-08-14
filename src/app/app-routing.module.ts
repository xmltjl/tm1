import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([{ path: '', component: Dashboard1Component }]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
