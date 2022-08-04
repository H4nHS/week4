import React from "react";
import styled from "styled-components";
// 이쪽에서는 styled-components를 사용하더라구요, 나는 싫은데ㅠㅠ
// 아무튼, 해당 기능을 import하려면 이렇게 불러와주시길 바랍니다.

// styled-components의 특징은 내가 선언한 변수로 style값을 가진 Component를 만든다는 데에 있습니다.
//아래의 Header 코드를 보실까요?

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
    // StContainer는 div 엘리멘트 속성을 지닌 컴포넌트입니다. (아래 코드를 보세요)
    // 그 안에 제목과 이름을 적은 div가 추가됐다고 봐주시면 되겠습니다 :D
  );
};

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

export default Header;
// 만들어진 컴포넌트를 사용하고 싶을 때에는 반드시 export를 사용해줍시다.
// 해당 파일 내에서 기본적으로 지정할 컴포넌트는 export default를 붙여주도록 합시다.
// ▼ 그렇지 않은 컴포넌트들도 외부로 보낼수 있습니다. 그 경우에는 export ~~ 해서 코드를 적어주시면 되겠습니다.

// export const StContainer = styled.div`
// border: 1px solid #ddd;
// height: 60px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 0 20px;
// margin-bottom: 24px;
// `;


