// import React from 'react';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Join = () => (
    <><table>
    <ul>
        <p>
            <label>
                ID : <input type="text" id="user_id" size="10" minlength="4"/>
            </label>
        </p>
        <p>
            <label>
                Password : <input type="password" id="user_pwd" size="10" minlength="6"/>
            </label>
        </p>
        <p>
            <label>
                Password Check : <input type="password" id="user_pwd" size="10" minlength="6"/>
            </label>
        </p>
        <p>
            <label>
                Name : <input type="text" id="user_name" size="10"/>
            </label>
        </p>
        <p>
            <label>
                English Name : &emsp;First Name &emsp;   Last Name <br/>&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="text" id="user_englishName" size="10"/>
                &ensp;<n/><input type="text" id="user_englishName" size="10"/>
            </label>
        </p>
        <p>
            <label>
                Gender : <input type="checkbox"/>Female <input type="checkbox"/>Male
            </label>
        </p>
        <p>
            <label>
                Birth : <br/><Example/>
            </label>
        </p>
        <p>
            <label>
                Passport : <input type="text" size="10" minlength="7"/>
            </label>
        </p>
        <p>
            <label>
                Address : Address line 1<br/>&emsp;&emsp;&emsp;&emsp;<input type="text" id="user_englishName" size="10"/>
                <p>City&emsp;&emsp;&emsp;&emsp; State<br/><input type="text" id="user_englishName" size="10"/><input type="text" id="user_englishName" size="10"/></p>
                <p>ZIP<br/><input type="text" id="user_englishName" size="10"/></p>
            </label>
        </p>
        <p>
            <label>
                Email : <input type="email" id="user_email"/>
            </label>
        </p>
        <p>
            <label>
                Gender : <input type="checkbox"/>Female <input type="checkbox"/>Male
            </label>
        </p>
        <p>
            <input type="submit" value="Join"/>
        </p>
    </ul>
    </table>
    </>
)

export default Join

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };