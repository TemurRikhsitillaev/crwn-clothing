import { call, all } from "redux-saga/effects"; // "effects" is SIDEEFFECTS
import { categoriesSaga } from "./categories/categories.saga";
import { userSaga } from "./user/user.saga";

// generator function , difference is sign "*"
function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}

export default rootSaga;
