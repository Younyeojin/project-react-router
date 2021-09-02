import React from 'react'
import styled from 'styled-components';
import Path from '../images/img2.jpg'
import {Link} from 'react-router-dom'

const MyPage = () => {
    return(<>
    <Table>
        <tr>
            <Ctd><img src={Path}/></Ctd>
            <Dtd>
                <Nav>
                <ol><Link to="/home">My page</Link></ol>
                <ol><Link to="/home">Home</Link></ol>       
                </Nav>
            </Dtd>
            <Atd>
                <ul>
                    <Label>ID :  <input type="text" id="user_id" size="10" minlength="4"/></Label>
                    
                <p>
                    <Label>Password :  <input type="password" id="user_pwd" size="10" minlength="6"/></Label>    
                </p>
                <p>
                    <Label>Password Check :  <input type="password" id="user_pwd" size="10" minlength="6"/></Label>                            
                </p>
                <p>
                    <Label>Name :  <input type="text" id="user_name" size="10"/></Label>
                </p>
                <p>
                    <Label>English Name : </Label>
                    &emsp;First Name &emsp;&emsp; Last Name <br/>&emsp;
                    <input type="text" id="user_englishName" size="10"/>
                    &ensp;<n/><input type="text" id="user_englishName" size="10"/>
                </p>
                <p> 
                    <Label>Gender : <input id="gender-type-1" name="gender-type" type="radio" value="Male"/>
                    <label for="gender-type-1" class="radio-label">Male</label>
                    <input id="gender-type-2" name="gender-type" type="radio" value="Male"/>
                    <label for="gender-type-2" class="radio-label">Female</label></Label>
                </p>
                    <Label> Birth :  <input type ="date"></input></Label>   
                <p>
                    <Label>Passport :  <input type="text" size="10" minlength="7"/></Label>
                </p>
                <p>
                    <Label>Address : </Label>
                        <br/>Address line 1<br/><input type="text" id="user_englishName" size="10"/>
                        <p>City&emsp;&emsp;&emsp;&emsp; State<br/><input type="text" id="user_englishName" size="10"/><input type="text" id="user_englishName" size="10"/></p>
                        <p>ZIP<br/><input type="text" id="user_englishName" size="10"/></p>
                </p>
                <p>
                    <Label>
                        Email : <input type="text" name="email_id" id="email_id"/> @ <input type="text" name="email_add" id="email_add"/>
                        <select name="email_sel" id="email_sel" onchange="change_email();">
                        <option value="">직접입력</option>
                        <option value="naver.com">naver</option><option value="gmail.com">gmail</option><option value="daum.net">daum</option>
                        </select></Label>
                </p>
                <p>
                    <Label>Phone : 
                    <select name="email_sel" id="email_sel" onchange="change_email();"><option value="">국가선택</option></select>
                    <input type="text" id="user_phone" size="10"/>
                    <br/><input type="text" id="user_phone" size="10"/><input type="submit" value="인증하기"/></Label>
                </p>
                <p>
                    <input type="submit" value="수정"/>
                </p>
                </ul>
            </Atd>
            <Btd><P>다가오는 여행/광고/메인홈링크</P></Btd>
        </tr>
        <tr>
            
        </tr>
    </Table>    
    </>)
};

export default MyPage

const Table=styled.table`
    // border: 1px solid black;
    text-align: left;
    margin: auto;
`
const Label = styled.div`
    font-weight: bold;
    
    
`
const Atd=styled.td`
    padding: auto;
    // border: 1px solid black;
`

const Btd=styled.td`
    padding: auto;
    border: 1px solid black;
     
`
const P=styled.p`
    position: relative;
    buttom: 500px;
`
const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const Ctd = styled.div`
    text-align: top;
    margin: auto;
`
const Dtd = styled.div`
    text-align: top;
    margin: auto;
`
