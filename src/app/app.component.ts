import { Component } from '@angular/core';
import { Book } from './shared/book';

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookProject';
  book!: Book;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(book: Book) {
    this.book = book;
    this.viewState = 'details';
  }
}
