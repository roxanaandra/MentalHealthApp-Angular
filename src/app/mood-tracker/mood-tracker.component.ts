import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent implements OnInit {
  currentQuote: string = '';
  showButtons: boolean = false;
  currentMood : string = '';

  quotes: any = {
    Sad: [
      "It's okay to feel sad sometimes.",
      "Sadness flies away on the wings of time.",
      "What cannot be said will be wept.",
      "Tears are words the heart can't express.",
      "Every life has a measure of sorrow."
    ],
    Medium: [
      "Life is as tedious as a twice-told tale.",
      "Every day may not be good, but there's something good in every day.",
      "Stability is not the same as excitement.",
      "Contentment is not the fulfillment of what you want.",
      "It's a day like any other."
    ],
    Happy: [
      "Happiness is not by chance, but by choice.",
      "The joy of life is made up of obscure and seemingly mundane victories.",
      "Happiness radiates like the fragrance from a flower.",
      "Be happy for this moment. This moment is your life.",
      "There is no path to happiness: happiness is the path."
    ]
  };

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.currentQuote = this.localStorageService.get<string>('quote') || this.currentQuote;
    this.currentMood = this.localStorageService.get<string>('mood') || this.currentMood;
    this.showButtons = this.localStorageService.get<boolean>('showButtons') ?? this.showButtons;
  
  }

  chooseMoodButton(mood: string): void {
    const moodQuotes = this.quotes[mood];
    this.currentQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    this.currentMood = mood;
    this.showButtons = !this.showButtons;
    this.localStorageService.save('quote', this.currentQuote);
    this.localStorageService.save('mood', this.currentMood);
    this.localStorageService.save('showButtons', this.showButtons);
   
  }
}
