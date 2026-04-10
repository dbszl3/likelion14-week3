import { useState } from "react";
import styled from "styled-components";
import MemoInsert from "./MemoInsert";
import MemoList from "./MemoList";

// 전체 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F9D9D9;
  gap: 40px;
`;

// MEMOLIST 제목
const Title = styled.p`
  font-size: 60px;
  font-weight: bold;
  color: black;
  margin-top: 150px;
  letter-spacing: 5px;
`;

// 저작권
const Footer = styled.p`
  font-size: 14px;
  color: #b7b7b7;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

function App() {

  const [memos, setMemos] = useState([]);

  function handleInsert(text) {
    setMemos([text, ...memos]); // 새로 들어오는 메모가 앞에 오도록 배열을 구성 
  }

  function handleRemove(index) {
    setMemos(memos.filter((_, i) => i !== index)); // 특정 index 를 제외한 새로운 배열을 구성
  }

  return (
    <Container>
      <Title>MEMOLIST</Title>
      <MemoInsert onInsert={handleInsert} />
      <MemoList memos={memos} onDelete={handleRemove} />
      <Footer>&copy; 2023216122 Hong Yoon Ji. All rights reserved.</Footer>
    </Container>
  );
}

export default App;