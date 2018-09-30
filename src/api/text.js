import api from './index';

const path = {
  text: '/mobile/text',
  text2: '/mobile/text2',
};

const text = (id) => api.get(path.text, {
  params: {
    id,
    name: '',
    rrr: null,
    access_token: ''
  },
});

const text2 = (id) => api.post(path.text2, {
  id
});

export default {
  text,
  text2
}
