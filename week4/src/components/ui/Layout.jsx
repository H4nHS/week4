import React from "react";
import styled from "styled-components";
    // StLayout는 div 엘리멘트 속성을 지닌 컴포넌트입니다. (아래 코드를 보세요)
    // 그 안에 제목과 이름을 적은 div가 추가됐다고 봐주시면 되겠습니다 :D

const Layout = ({ children }) => {
  return <StLayout>{ children }</StLayout>;
  // children은 Layout 태그 안쪽의 자식 태그들을 받아올 때 쓸 수 있습니다.
  // 이 명칭은 약속된 것입니다! children을 aaa로 바꿔 적어본 다음 페이지를 보세요, 어떤 변화가 있을지!
  // 이건 Home jsx 파일을 보시면 쉽게 이해가 가실거에요 :D
};

export default Layout;
// 만들어진 컴포넌트를 사용하고 싶을 때에는 반드시 export를 사용해줍시다.
// 해당 파일 내에서 기본적으로 지정할 컴포넌트는 export default를 붙여주도록 합시다.

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
