import React from 'react';
import styled from 'styled-components';



const Join = () => (
    
    <Table>
    <ul>
        <p>
            <Label>ID : </Label>
            <input type="text" id="user_id" size="10" minlength="4"/>          
        </p>
        <p>
            <Label>Password : </Label>
            <input type="password" id="user_pwd" size="10" minlength="6"/>           
        </p>
        <p>
            <Label>Password Check : </Label>
            <input type="password" id="user_pwd" size="10" minlength="6"/>           
        </p>
        <p>
            <Label>Name : </Label>
            <input type="text" id="user_name" size="10"/>
        </p>
        <p>
            <Label>English Name : </Label>
            &emsp;First Name &emsp;&emsp; Last Name <br/>&emsp;
            <input type="text" id="user_englishName" size="10"/>
            &ensp;<n/><input type="text" id="user_englishName" size="10"/>
        </p>
        <p> 
            <Label>Gender :</Label>
            <input id="gender-type-1" name="gender-type" type="radio" value="Male"/>
            <label for="gender-type-1" class="radio-label">Male</label>
            <input id="gender-type-2" name="gender-type" type="radio" value="Male"/>
            <label for="gender-type-2" class="radio-label">Female</label>
        </p>
        <p> Birth : &ensp; <input type ="date"></input>
        </p>
        <p>
            <Label>Passport : </Label>
            <input type="text" size="10" minlength="7"/>
        </p>
        <p>
            <Label>Address : </Label>
                <br/>Address line 1<br/><input type="text" id="user_englishName" size="10"/>
                <p>City&emsp;&emsp;&emsp;&emsp; State<br/><input type="text" id="user_englishName" size="10"/><input type="text" id="user_englishName" size="10"/></p>
                <p>ZIP<br/><input type="text" id="user_englishName" size="10"/></p>
        </p>
        <p>
            <Label>
                Email : <input type="text" name="email_id" id="email_id"/> @ </Label><input type="text" name="email_add" id="email_add"/>
                <select name="email_sel" id="email_sel" onchange="change_email();">
                <option value="">직접입력</option>
                <option value="naver.com">naver</option><option value="gmail.com">gmail</option><option value="daum.net">daum</option>
                </select>
        </p>
        <p>
            <Label>Phone : </Label>
            <select name="email_sel" id="email_sel" onchange="change_email();"><option value="">국가선택</option></select>
            <input type="text" id="user_phone" size="10"/>
            <br/><input type="text" id="user_phone" size="10"/><input type="submit" value="인증하기"/>
            
        </p>
        <Atable>
            <label>선호하는 취향</label>
            <tr>  
                <td>Who is your favorite TripMate?</td>
                <td>Who is your favorite TripMate?</td>
            </tr>
            <tr>
                <td>Who is your favorite TripMate?</td>
                <td>Who is your favorite TripMate?</td>
            </tr>
        </Atable>
        <p>
            <input type="radio" value=""/> 약관에 동의하시겠습니까?
        </p>
        <p>
            <input type="submit" value="Join"/>
        </p>
        
    </ul>
    
    </Table>    
)

export default Join

const Table = styled.div`
    width: 600px;
    // height: 0 auto;
    margin: 0 auto;
    background-color: #D4F4FA;
    text-align: left;
    // text-justify: auto;
    display: flex;
    // border: 1px solid black;
    margin-top: 40px;
    padding: 55px;
`
const Label = styled.div`
    font-weight: bold;
`
const Atable=styled.table`
    border: 1px solid black;
`



//<label>Gender :</label>
//<input type="checkbox"/>Female <input type="checkbox"/>Male