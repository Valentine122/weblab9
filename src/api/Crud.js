import axios from "axios";

const http = axios.create({
    baseURL: 'http://127.0.0.1:5000/item',
    headers: {
        'Content-Type': 'application/json'
    }
  });

export async function getAllByFilters(combine_name, price, rate) {
    let url = `http://127.0.0.1:5000/item?`;

    if (combine_name !== undefined && combine_name !== '') {
        url += `combine_name=${combine_name}&`;
      }
    if (price !== undefined) {
      url += `price=${price}&`;
    }
    if (rate !== undefined) {
        url += `rate=${rate}&`;
    }
    return (await http.get(url)).data;
}

export async function getOne(id) {
    let url = `http://127.0.0.1:5000/item/${id}`;
    return (await http.get(url)).data;
}