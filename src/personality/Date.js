import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
// import "./css/react-datepicker.css"; 
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);


function Date() {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => ( <button class="example-custom-input" onClick={onClick}> {value} </button> );
    const getFormattedDate = (date) => { const month = date.toLocaleDateString('ko-KR', { month: 'long', });
    const day = date.toLocaleDateString('ko-KR', { day: 'numeric', });
    return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`; }
    const createDate = (date) => { return new Date(new Date(date.getFullYear() , date.getMonth() , date.getDate() , 0 , 0 , 0)); }

    return ( 
    <> <DatePicker locale="ko" selected={startDate} state onChange={setStartDate} customInput={<ExampleCustomInput />} minDate={new Date()} 
     disable popperModifiers={{ preventOverflow: { enabled: true, }, }} 
     popperPlacement="auto"dayClassName={date => getDayName(createDate(date)) === '토' ? "saturday" : getDayName(createDate(date)) === '일' ? "sunday" : undefined } /> </> ); }

export default Date