import { Component } from '@angular/core';
import { RouterModule,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
