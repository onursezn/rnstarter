import React from 'react';
import Container from '../../components/common/Container';
import { Text,Button } from 'react-native';
import {REGISTER, LOGIN} from '../../constants/routeNames';

const SignUp = ({navigation}) => {
    return (
        <Container>
            <Text>SignUp screen</Text>
            <Button title="Sign In" onPress={() => navigation.push("SignIn")}></Button>
        </Container>
    )
};

export default SignUp;