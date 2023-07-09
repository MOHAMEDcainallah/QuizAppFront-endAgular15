import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileDetails: any[] = [
    {
      username: 'john_doe',
      userId: '123',
      email: 'john@example.com',
      phonenumber: '123-456-7890',
      authorities: [{ authority: 'Admin' }],
      enabled: true
    },

  ];
}
