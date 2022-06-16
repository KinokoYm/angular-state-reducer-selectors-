import { createAction, props } from '@ngrx/store';

import { Book } from '../books-list/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book List/Api] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);
