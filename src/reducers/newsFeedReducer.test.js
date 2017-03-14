import { LOAD_NEWS } from '../actions/actionTypes';
import newsFeedReducer from './newsFeedReducer';

import mockData from '../mockData.json';
const initialState = [];

it('アクションタイプに定義されていないアクション名の場合は初期値がステートに渡される', () => {
  expect(newsFeedReducer(initialState, { type: 'LOAD_NEWS_TEST', payload: mockData })).toEqual(initialState);
});

it('アクション名：LOAD_NEWSの場合はモックデータのresultプロパティ値がステートに渡される', () => {
  expect(newsFeedReducer(initialState, { type: LOAD_NEWS, payload: mockData })).toEqual(mockData.results);
});
