import styled from "styled-components";
import { useState } from "react";

const InsertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 20px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  &::placeholder {font-size: 16px;}
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #D09292;
  &:hover {background-color: #d87272;}
  cursor: pointer;
`;

function MemoInsert({ onInsert }) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        if (text.trim() === "") return; // 빈 문자열이면 아무것도 반환하지 않음 

        onInsert(text); // 작성된 메모를 추가
        setText(""); // 작성된 메모를 추가하고 입력창을 초기화 
    }

    return (
        <InsertContainer>
            <Input type="text" placeholder="메모를 입력하세요." value={text} onChange={handleChange} />
            <Button onClick={handleClick}>추가</Button>
        </InsertContainer>
    );
}

export default MemoInsert;