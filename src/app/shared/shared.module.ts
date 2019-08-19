import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'navbar', component: NavBarComponent }
    ])
  ],
  
  exports:[
    CommonModule,
    FormsModule,
    NavBarComponent,
    
  ]
})
export class SharedModule { }
