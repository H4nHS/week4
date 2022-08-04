import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";
// 여기는 비유를 하자면 은행을 관리하기 위한 공간이라고 봐주시면 됩니다.
// 앞서 index.js에서 store는 일종의 은행, 금고라는 비유를 드렸습니다.
// 그러면 store를 은행이라고 말할 때, 은행장인 당신은 이 은행을 어떻게 운영해야할지 고민해야되지 않겠어요?
// 이 아래에 있는 코드들은 전부 그 은행을 어떻게 운영할지를 간단하게 작성한 내용입니다.
// 그리고 그 운영을 하기 위한 상세 메뉴얼은... todos.js에서 보시면 될 것 같네요^^

const rootReducer = combineReducers({
  todos,
});
// combineReducers라는 모듈을 짚고 가기전에 우리는 'Reducer'라는 개념을 짚고 가야합니다.
// Reducer, 어디서 많이 들어보지 않았나요? 그렇죠? 알고리즘 주차의 Reduce를 생각해보면 확 와닿죠?

// Reducer의 의미는 reduce 그 자체입니다. useState를 생각해봅시다.
// useState도 엄밀히 말하면 Reduce와 같습니다. 현재값을 계속해서 갱신될 값으로 덮어씌우기를 반복하잖아요.
// reducer의 역할은 그 useState와 같습니다. 여러분들이 이제 예치금을 가져오면 그걸 입금해야하잖아요? 그럼 통장 내역이 바뀌죠?
// 근데 이제 또 출금을 하네요? 그럼 또 통장 내역이 바뀌죠?
// 이렇게 계속해서 입출금 등처럼 어떠한 동작을 하게 해서 state의 내용을 갱신해주는 일을 해주는 것이 Reducer입니다.

// combineReducers는 redux에서 이런 Reducer들을 한데 모아 관리하겠다는 모듈입니다.
// 저 위에 todos만 있지만, 경우에 따라 다른 reducer 함수가 있다면 저기에 또 추가가 되겠죠?

const store = createStore(rootReducer);
// createStore는 이제 위에서 선언한 Reducers을 가지고 은행을 만들겠다고 선포하는 것입니다.
// 은행에서 일어나는 일들을 담당하는 직원을 reducer라고 생각해봅시다. 그러면 store가 은행이라고 하면 좀 와닿겠죠?
// 그리고 그 store에서 reducer로 인해서 내역이 변경되는 통장같은 존재가 이제 우리가 잘 알아야할 state라고 봐주시면 됩니다.

export default store;
// 자, 은행을 개설했으니 이용할 수 있도록 해야겠죠? 그러니 export default를 잊지 맙시다.
