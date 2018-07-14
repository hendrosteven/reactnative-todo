import React, {Component} from 'react';
import { Container, Content,Input, List, ListItem, Body, Text, Item, Label, Button } from 'native-base';
import HeaderApp from './HeaderApp';
import { Actions } from '../../node_modules/react-native-router-flux';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            todoItem: '',
            todos: []
        }
    }

    getItems = ()=>{
        let todoList;
        if(this.state.todos){
            todoList = this.state.todos.map((todo,i)=> {
                return (
                    <ListItem key={i} onPress={()=>{
                        Actions.detail({todoItem: todo})
                    }}>
                        <Body>
                            <Text>{todo}</Text>
                        </Body>
                    </ListItem>
                );
            });
        }else{
            todoList = ()=>{
                return (
                    <ListItem key='1'>
                        <Body><Text>Empty</Text></Body>
                    </ListItem>
                );
            }
        }
        return todoList;
    }

    changeItemHandler = val =>{
        this.setState({
            todoItem: val
        })
    }

    buttonSaveHandler = () =>{
        if(this.state.todoItem.trim() === ""){
            return;
        }

        this.setState(prevState =>{
            return {
                todos: prevState.todos.concat(prevState.todoItem)
            }
        })
    }

    render(){
        return(
            <Container>
                <HeaderApp title="Todo List" home={true}/>
                <Content>
                    <Item floatingLabel>
                        <Label>Todo Item</Label>
                        <Input onChangeText={this.changeItemHandler}/>
                    </Item>
                    <Item>
                        <Button full style={{alignSelf:'center', margin: 20}} onPress={this.buttonSaveHandler}>
                            <Text>Save Todo</Text>
                        </Button>
                    </Item>
                    <List>
                        {this.getItems()}
                    </List>
                </Content>
            </Container>
        );
    }
}
