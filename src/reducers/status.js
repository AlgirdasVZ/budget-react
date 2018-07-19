export default (state = 'loaded', action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return 'loading';
    case 'SET_ERROR':
      return 'error';
    case 'SET_LOADED':
      return 'loaded';
    default:
      return state;
  }
};