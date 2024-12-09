import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit{
  
  constructor(
    private api:ApiService,
    private auth:AuthService,
  ){}

  loggedUser:User={
    id: '',
    name: '',
    email: '',
    passwd: '',
    confirm: '',
    role: ''
  }

  bookings = []

  ngOnInit(): void {
    this.loggedUser = this.auth.loggedUser()
    console.log(this.loggedUser)
  }


}
