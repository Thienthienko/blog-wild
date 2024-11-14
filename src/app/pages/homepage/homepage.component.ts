import { Component } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ArticleListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
