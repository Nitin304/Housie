import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tambola';
  columnCount:number= 10;
  randomNumber=0;
  maxRows=[0,10,20,30,40,50,60,70,80];
  alreadyGeneratedArray = [];

  arrayOne(n: number): any[] {
    return Array(n);
  }

  generateRandomNumber(){
    let num = Math.floor(Math.random() * 90) + 1;
    if(this.alreadyGeneratedArray.length==90){
      return;
    }
    if(this.alreadyGeneratedArray.includes(num)){
      this.generateRandomNumber();
    }
    else{
      this.randomNumber = num;
      this.alreadyGeneratedArray.push(num);
      document.getElementById(num+"").style.color="white";
      document.getElementById(num+"").style.backgroundColor="grey";
    }
  }
}
