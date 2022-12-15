import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dateFilterHandler = (e) => {
        props.onYearFilter(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter</label>
                <select value={props.selected} onChange={dateFilterHandler}>
                    <option value='All'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;