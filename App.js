import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from "./screen/login";
import {setInfoLogin} from "./redux/sagas/user";
import Booking from "./screen/booking";

const App = () => {
    const [data, setData] = React.useState();
    const sendLogin = (email, password) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setInfoLogin(email, password, (response) => {
                setData(response);
            });
        } else {
            alert('Correo electronico no valido');
        }
    };
    React.useEffect(() => {
        if (data) {
            console.log(data);
        }
    });
    return (
        <View style={styles.container}>
            {!data && <Login sendLogin={sendLogin}/>}
            {data &&
            <Booking data={data} onpress={setData(null)} />
            }

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
export default App;
