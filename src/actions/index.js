import * as types from './action-types';

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: types.SELECT_BOOK,
    payload: book
  };
}
