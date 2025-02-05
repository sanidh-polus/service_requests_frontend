import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { InProgressRequestsComponent } from './in-progress-requests/in-progress-requests.component';
import { AssignedRequestsComponent } from './assigned-requests/assigned-requests.component';
import { ApprovedRequestsComponent } from './approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './rejected-requests/rejected-requests.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UserNavComponent,
    UserHomeComponent,
    InProgressRequestsComponent,
    AssignedRequestsComponent,
    ApprovedRequestsComponent,
    RejectedRequestsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgFor,
    NgIf,
    RouterOutlet,
    RouterLink
  ]
})
export class UserModule {}
