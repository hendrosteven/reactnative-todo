
import React, { Component } from 'react';
import {Header, Left, Body, Text, Icon, Button, View} from 'native-base';
import { Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class HeaderApp extends Component{

    render(){
        return(
            <Header>
                <Left>
                    {
                        this.props.home ? 
                        <Image 
                            source={{
                            uri:    'http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-5/256/ToDo-List-icon.png'
                            }}
                            style={{width: 35, height: 35}}/>
                        : 
                        <Icon  name="arrow-back" style={{color:'white'}} 
                            onPress={() => {
                            Actions.pop();
                            }}/>
                    }
                    
                </Left>
                <Body>
                    <Text>{this.props.title}</Text>
                </Body>
            </Header>
        );
    }
}