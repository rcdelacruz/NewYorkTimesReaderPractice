/**
 * ニュースデータを格納するステートを呼び出すアクション
 * → アクションが実行されると対応するReducersに定義されたステート更新処理を実行する
 * ※ src/createStore.jsの「news:」に設定される。
 *
 * --------------------
 * {
 *   news: newsFeedReducer,
 *   searchTerm: searchTermReducer,
 *   navigation: navigationReducer
 * }
 * --------------------
 */
import { LOAD_NEWS } from '../actions/actionTypes';

//NewYorkTimesのニュースデータをステートに格納する
export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_NEWS:
      return action.payload.results || [];
    default:
      return state;
  }
};
