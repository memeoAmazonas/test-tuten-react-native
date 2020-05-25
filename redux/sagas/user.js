import apiCall from '../api/apiCall';
import URL_TUTEN from '../api/url';
import config from '../../config';
import {setInfoBooking} from "./booking";

export const setInfoLogin =(email, password, callback )=> {
  const url = `${URL_TUTEN}${email}`;
  const { app } = config;
  try {
    apiCall(url, 'PUT', null, null, {
      app, password,
    })
        .then(response =>
        setInfoBooking(email,response.data.sessionTokenBck, callback))
        .catch(error => console.log(error));

  } catch (e) {
    alert("A ocurrido un error iniciando sesion, por favor intentelo nuevamente");
  }
};

