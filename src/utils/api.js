
import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {

    params: {

        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '232f43c18fmsh04c17e924443275p1ae841jsnde14b0b4a9ea',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


// aldığı urli apinin temel linkine uç nokta olarak ekleyrek o linke,
// istek atan bir yardımcı fonk.
export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};