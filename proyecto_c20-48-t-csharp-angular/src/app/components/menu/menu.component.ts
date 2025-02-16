import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faUser, faCalendar, faHistory, faTasks, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


// Iconos
  faBars = faBars;
  faHome = faHome;
  faUser = faUser;
  faCalendar = faCalendar;
  faHistory = faHistory;
  faTasks = faTasks;
  faSignOutAlt = faSignOutAlt;
  faUsers = faUsers;

  menuAbierto = false;

    toggleMenu(){
      this.menuAbierto = !this.menuAbierto;
    }

  ngOnInit(): void {
  }

}
