
import React, { Component } from 'react';
import {Footer, FooterTab, Text, Button} from 'native-base';

export default class Footer extends Component{
    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Save</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}