import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import { useForm } from "react-hook-form";
import useTodo from '../hooks/useTodo';

const Todoform = () =>{
  const { register, handleSubmit, setValue, reset } = useForm();
  const {todoItems,editIndex,addTodo,updateTodo,deleteTodo,setEdit} = useTodo();

  const onSubmit = (data) => {
    
    if (editIndex !== null) {//is edited or not
      // upate todo
      updateTodo(editIndex, data.text);
    } else {
      // add todo
      addTodo(data.text);
    }
    // reset form 
    reset();
  };

  //edit todos
  const handleEdit = (index) => {
    setEdit(index);
    setValue("text", todoItems[index].text);
  };
  return(
      <div style={{margin:"20px"}}>
      <Container fluid>
      <Card className="mx-auto">
      <Card.Header><h3>Todo List</h3></Card.Header>
      <Card.Body>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Control {...register("text", { required: true })} 
                  placeholder="Enter a Todo..."/>
                </Col>
                <Col>
                <Button variant="primary" type='submit'>
                {editIndex !== null ? "Edit" : "ADD"}
                </Button>
                </Col>
              </Row>
            </Form>
            {/* </form> */}
      </Card.Body>
    </Card>
    </Container>
    <TodoList
        todoItems={todoItems}
        handleEdit={handleEdit}
        handleDelete={deleteTodo}
      />
    </div>
    );
}

export default Todoform;