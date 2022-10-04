import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Output() showListEvent = new EventEmitter<any>();
  book: Book | undefined;
  constructor(private bs: BookStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book = this.bs.getSingle(params.get('isbn'));
  }

  getRating(num: any) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }

}
