import authReducer from './auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should clear uid for logout', () => {
  const initState = {
    uid: '123abc'
  };
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer(initState, action);
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: action.uid });
});

