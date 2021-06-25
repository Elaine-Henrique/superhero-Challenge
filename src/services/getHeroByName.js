import {api} from './api';

const getHeroByName = async (name) => {
  const response = await api.get(`/search/${name}`);

  return response.data;
};

export default getHeroByName;