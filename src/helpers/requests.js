import axios from 'axios';

const url = 'http://127.0.0.1:4000';

export const getTable = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const list = await axios.get(`${url}/table/list`, headers);

  return list;
};

export const addTable = async (
  origin,
  destiny,
  time,
  plan,
  withPlan,
  withoutPlan,
) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = {
    origin,
    destiny,
    time,
    plan,
    withPlan,
    withoutPlan,
  };

  const add = await axios.post(`${url}/table/add`, data, headers);
  return add;
};

export const deleteTable = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const del = await axios.delete(`${url}/table/delete`, headers);

  return del;
};
