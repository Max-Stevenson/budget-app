import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calandarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calandarFocused) => {
    this.setState(() => ({ calandarFocused }));
  };

  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  };

  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.dispatch(sortByAmount());
    } else if (e.target.value === 'date') {
      this.props.dispatch(sortByDate())
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange} />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calandarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          startDateId='abc'
          endDateId='123'
        />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);