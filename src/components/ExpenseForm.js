import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calandarFocused: false
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChage = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    };
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calandarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
          <input
          type="text"
          placeholder="Description"
          autoFocus={true}
          value={this.state.description}
          onChange={this.onDescriptionChange}>
          </input>
          <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}>
          </input>
          <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calandarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          />
          <textarea
          placeholder="Add a note for your expense (optional)"
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