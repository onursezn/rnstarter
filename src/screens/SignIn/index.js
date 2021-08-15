import React from 'react';
import { Button, Text, View } from 'react-native';
import Container from '../../components/common/Container';
import {REGISTER, LOGIN} from '../../constants/routeNames';

const SignIn = ({navigation}) => {
    return(
        <Container>
            <Text>Sign in screen</Text>
            <Button title="SignUp" onPress={() => navigation.push({REGISTER})}></Button>
        </Container>
    )
}

export default SignIn;