import apiCall from '../api/apiCall';
import URL_TUTEN from '../api/url';
import config from '../../config';
import filterData from '../../helpers/filterData';

export const setInfoBooking = (adminemail, token, callback)=> {
  const { email, app, current } = config;
  const url = `${URL_TUTEN}${email}/bookings`;
  const headers = { app, token, adminemail };
  const params = { current };
  try {
   apiCall( url, 'GET', params, null, headers)
       .then((response)=> {
         callback(filterData(response.data));
       })
       .catch((error) => {
         console.log(error);
       });
      } catch (e) {
    alert("A ocurrido un error consultando las reservaciones");
  }
};
