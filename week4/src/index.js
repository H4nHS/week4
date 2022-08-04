import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
// 기본적으로 react-redux를 설치하시면, App Component 범위 내에서 store가 적용되도록
// 자동으로 위와 같이 생성되는 경우가 있습니다.
// 혹여 store 파일 위치가 바뀌었다면 수정하는 걸 잊지 맙시다!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
// 이처럼 react-redux를 설치해주면 자동으로 App Component를 Provider가 감싸줍니다.
// Provider는 뭐고, store는 뭔가요?
// store는 redux의 핵심입니다. 전역으로 상태를 저장할 일종의 은행, 금고 같은 존재를 redux에서는 'store'라고 부릅니다.
// 우리는 이 store 속에 있는 state라는 녀석을 비유로 표현하면 입금하거나, 출금하거나 조회할 수 있습니다.
// Provider는 이 store라는 은행, 금고가 활용될 수 있는 범위를 나타내준다고 봐주시면 되겠습니다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
