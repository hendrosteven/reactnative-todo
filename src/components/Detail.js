
import React, { Component } from 'react';
import HeaderApp from './HeaderApp';
import { Container, Content, Text } from 'native-base';

export default class Detail extends Component{
    render(){
        return(
            <Container>
                <HeaderApp title="Todo Detail" home={false}/>
                <Content>
                    <Text>{this.props.todoItem}</Text>
                </Content>
            </Container>
        );
    }
}