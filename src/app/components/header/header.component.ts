import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('openModalProfile') openModalProfile = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('login');
  }

  openModal(){
    this.openModalProfile.emit();
  }

}
