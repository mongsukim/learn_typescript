import { useState, useRef, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 리액트에서는 이렇게 배열 형태로 저장된 요소들을 리스트 렌더링을 할 때 모든
  // 요소가 중복되지 않는 고유한 키를 가져야 한다.
  // id를 요소를 추가할 때마다 증가시켜주자.
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}></Editor>
    </div>
  );
}

export default App;
