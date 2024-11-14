import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  //   {
  //     path: '**',
  //     component: NotFoundComponent,
  //   },
];
