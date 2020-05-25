import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormField from "../components/formField";
import Button from "../components/button";

const  Login = ({sendLogin})=> {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
        return (
        <View style={styles.container}>
            <Text style={{marginBottom: 10 }}>Login</Text>
            <FormField
                value={email}
                label={'Email'}
                onChangeText={(text) => setEmail(text)}
                keyboardType={'email-address'}

            />
            <FormField
                value={password}
                label={'Contraseña'}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}

            />
            <Button children={"Enviar"} pressed={()=>sendLogin(email, password)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fff3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Login;
