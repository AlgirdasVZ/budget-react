import moment from 'moment/moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 1.95,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 1095,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit card',
  note: '',
  amount: 45,
  createdAt: moment(0).add(4, 'days').valueOf()
}];