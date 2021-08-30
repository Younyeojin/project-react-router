import React from 'react';

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
                Birth : <input type="password" id="user_pwd" size="10" minlength="6"/>
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

