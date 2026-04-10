import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  &:hover {background-color: #860101;}
  cursor: pointer;
`;

function MemoItem({memo, onDelete}) {
    return (
        <ItemContainer>
            <Text>{memo}</Text>
            <Button onClick={onDelete}>삭제</Button>
        </ItemContainer>
    );
}

export default MemoItem;