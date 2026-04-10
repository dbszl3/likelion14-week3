import MemoItem from "./MemoItem";

function MemoList({ memos, onDelete }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index} // 들어오는 메모들을 index 번호로 저장 
          memo={memo}
          onDelete={() => onDelete(index)} // 삭제 버튼이 눌리면 해당 index 번호의 메모가 삭제되도록
        />
      ))}
    </div>
  );
}

export default MemoList;