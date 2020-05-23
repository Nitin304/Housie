import { Component } from '@angular/core';
import Speech from 'speak-tts'

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
  speech = new Speech()
  ngOnInit(): void {
    
    this.speech.init({
      'volume': 1,
         'lang': 'en-IN',
         'rate': 1,
         'pitch': 1,
         'voice':'Google UK English Female',
         'splitSentences': true,
         'listeners': {
             'onvoiceschanged': (voices) => {
                 console.log("Event voiceschanged", voices)
             }
         }
 })
  }

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
      this.speech.speak({
        text: "Number is "+num,
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
      this.alreadyGeneratedArray.push(num);
      document.getElementById(num+"").style.color="white";
      document.getElementById(num+"").style.backgroundColor="grey";
      
    }
  }
}
