import { CALL_API } from '@aftonbladet/redux-api-middleware';

export default function(params) {
  return {
    [CALL_API]: Object.assign({}, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    }, params)
  };
}

