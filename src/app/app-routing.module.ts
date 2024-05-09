import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { CampaignComponent } from './campaign/campaign.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, 
  {path: 'journal-details', component: JournalDetailsComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'media-details', component: MediaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
