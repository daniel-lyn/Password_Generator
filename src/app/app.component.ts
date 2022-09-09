import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  length = 0;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
    else{
      length = 0;
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'; 
    const symbols = '!@#$%^&*()_+';

    let validChar = ''; 
    if(this.includeLetters){
      validChar += letters; 
    }
    if(this.includeNumbers){
      validChar += numbers; 
    }
    if(this.includeSymbols){
      validChar += symbols; 
    }

    let generatedPasswords = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChar.length);
      generatedPasswords += validChar[index];
    }
    this.password = generatedPasswords;
  }
}
