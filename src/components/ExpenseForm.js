import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calandarFocused: false,
      error: ''
    };
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChage = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    };
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    };
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calandarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter a description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    };
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            className="text-input"
            autoFocus={true}
            value={this.state.description}
            onChange={this.onDescriptionChange}>
          </input>
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}>
          </input>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calandarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => { false }}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            className="text-area"
            value={this.state.note}
            onChange={this.onNoteChage}>
          </textarea>
          <button>
            Add Expense
          </button>
        </form>
      </div>
    );
  };
};