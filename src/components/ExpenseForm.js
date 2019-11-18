import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChage = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
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
          type="number"
          placeholder="Amount">
          </input>
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