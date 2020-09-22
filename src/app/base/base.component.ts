import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers: [FirebaseService]
})
export class BaseComponent implements OnInit {

  constructor(public firebase: FirebaseService) { }

  public getBase(){
    this.firebase.getFullBase();
  }

  ngOnInit() {
  }

}