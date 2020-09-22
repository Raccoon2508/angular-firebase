import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {filter} from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  public base;
  constructor() { 
    this.base = firebase.initializeApp({
      databaseURL: 'https://writers-base-52bae.firebaseio.com/'
    }).database();
  }
  public getFullBase(){
    return this.base.ref().once('value').then(item=>console.log(item.val()))
  }

  public getCardById(id){
    return this.base.ref(id-1).once('value').then(item=>console.log(item.val()))
  }

  public getCardByName(searchStr) {
        let searchReq = searchStr.toLowercase();
        function filterReq(item, request){
          let name = item.name.toLowercase();
          let surname = item.surname.toLowercase();
          let patronymic = item.patronymic.toLowercase();
          return request.includes(name)&&request.includes(surname)&&request.includes(patronymic);
        }
        
        return this.base.ref().once('value').pipe(filter((item)=> filterReq(item,searchReq)));
  
  }

  public getCardByBook(book) {
    let searchReq = book.toLowercase();
        function filterReq(item, request){
          let includes = false;
          item.books.forEach(book => {
            if(book.toLowercase() === request) {
              includes = true;
            }
          })
          return includes;
        }
        
        return this.base.ref().once('value').pipe(filter((item)=> filterReq(item,searchReq)));



}