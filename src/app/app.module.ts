import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { JournalComponent } from './journal/journal.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { MoodTrackerComponent } from './mood-tracker/mood-tracker.component';
import { CampaignComponent } from './campaign/campaign.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { MediaComponent } from './media/media.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    JournalComponent,
    JournalDetailsComponent,
    LocalStorageComponent,
    MoodTrackerComponent,
    CampaignComponent,
    QuizComponent,
    HeaderComponent,
    MediaComponent,
    MediaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
