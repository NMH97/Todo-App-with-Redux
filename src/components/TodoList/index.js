import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { createAddTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoRemaining } from "../../redux/selectors";
// import rootReducer from "../../redux/reducer";

export default function TodoList() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todoRemaining);

  const handleAddButton = () => {
    dispatch(
      createAddTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
    inputRef.current.focus();
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              id={todo.id}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} ref={inputRef} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
