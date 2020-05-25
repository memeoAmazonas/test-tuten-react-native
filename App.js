import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Login from "./screen/login";
import Booking from "./screen/booking";
import {setInfoLogin} from "./redux/sagas/user";
const App = () => {
    const [data, setData] = React.useState();
    const [isLoading, setIsloading]= React.useState(false);
    const sendLogin = (email, password) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsloading(true);
            setInfoLogin(email, password, (response) => {
                setData(response);
                setIsloading(false);
            });
        } else {
            alert('Correo electronico no valido');
        }
    };
    return (
        <View style={styles.container}>
            {!data && !isLoading && <Login sendLogin={sendLogin}/>}
            {data && !isLoading &&
            <Booking data={data} onpress={()=>setData(null)} />
            }
            {
                isLoading &&
                <Spinner
                    visible={isLoading}
                    textContent={'Cargando...'}
                    textStyle={styles.spinnerTextStyle}
                />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    container: {
        flex: 1,
        backgroundColor: '#f9fff3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;
