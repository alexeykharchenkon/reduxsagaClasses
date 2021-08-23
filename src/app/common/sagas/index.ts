import { all } from "redux-saga/effects";
import todoSagas from './todoSagas'

function* rootSaga() {
  yield all([...todoSagas]);
}

export default rootSaga;