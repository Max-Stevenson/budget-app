import moment from 'moment';

export default [{
  id: '1',
  description: 'test',
  note: 'test',
  amount: 1,
  createdAt: 0
}, {
  id: '2',
  description: 'test two',
  note: 'test',
  amount: 1,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'test three',
  note: 'test',
  amount: 3,
  createdAt: moment(0).add(4, 'days').valueOf()
}];