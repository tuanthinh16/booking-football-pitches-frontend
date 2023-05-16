import React, { Component,useState } from 'react';
import styled from 'styled-components';
import { ACCOUNT, IMG } from '../data/DATA';
import { useNavigate  } from 'react-router-dom';

export const Login = ()=>{
    const history = useNavigate ();
    const [Account, setAccount] = useState({username:'',password:''});
    const onValueChange =(inputKey)=> (e)=>{
        setAccount((prev)=>({...prev,[inputKey]:e.target.value}))
    }
    console.log(Account);
    var isLogin = false;
    
    const onLogin = ()=>{
        let username = Account.username;
        let password = Account.password;
        ACCOUNT?.map((row)=>(
            username == row.username && row.password == password ?(
                isLogin = true
            )
            :(console.log("khong thay user"))
            )) 
            if(isLogin){
                //login
                localStorage.setItem('token',isLogin.toString())
                window.location.reload();
                history('/home')
            }else{
                console.log("chua login")
            }

    }


   
    return(
        <Wrapper>
            <div className='login-input'>
                <h2>Nhat Hung Football</h2>
                <p>Khám phá thế giới bóng đá
Chào mừng bạn đến với CLB Bóng đá, nơi hội tụ những đam mê và tình yêu dành cho môn thể thao vua. Để truy cập vào trang web và khám phá những nội dung hấp dẫn, vui lòng đăng nhập để trải nghiệm một cách đầy đủ.
</p><p>Để đăng nhập, hãy sử dụng tên đăng nhập và mật khẩu của bạn. Nếu bạn chưa có tài khoản, hãy đăng ký để trở thành thành viên của CLB Bóng đá và cùng chúng tôi tạo nên một cộng đồng đam mê bóng đá thực sự.</p>
                <p>Đừng bỏ lỡ cơ hội được kết nối với những người yêu bóng đá khắp nơi. Hãy đăng nhập ngay và bắt đầu hành trình của bạn trong thế giới đầy hứa hẹn của CLB Bóng đá. Chào đón sự chờ đợi, sự hào hứng và những trận đấu đỉnh cao!</p>
                <p>Hãy đăng nhập và trở thành một thành viên tích cực trong cộng đồng bóng đá của chúng tôi. Chúng tôi sẵn lòng chào đón bạn!</p>
                <h2 id='login-header'>Vui long dang nhap</h2>
                <div className = 'username-ctn'>
                    <span id='text-input'>Username </span>
                    <input type='text' name='username' onChange={onValueChange('username')} className='username' ></input>
                </div>
                <div className = 'password-ctn'>
                    <span id='text-input'>Password </span>
                    <input type='password' name='password'onChange={onValueChange('password')} className='password' ></input>
                </div>
                <div className='btn-login'>
                    <button onClick={()=>onLogin()}>Login</button>
                </div>
            </div>
            <div className='login-img'>
                <img id='img-login'src=''></img>
            </div>
        </Wrapper>
    );
}
export const Wrapper = styled.div`
    background-image: url(${IMG[0].url});
    background-repeat: no-repeat;
    //margin: 2rem;
    //border-radius: 25px;
    color: white;
    padding: 2rem;
    text-align: center;
    max-width: fit-content;
    display: flex;
    .login-input{
        background-color: #257D8E;
        margin: 0 1rem 0 1rem;
        padding: 2rem;
        border-radius: 50px;
        border: 1px solid transparent;
        max-width: 55%;
        .username-ctn{
            padding: 1rem;
        }
        .password-ctn{
            padding: 1rem;
        }
        .btn-login{
            padding: 1rem;
            button{
                border-radius: 999px ;
                border:1px solid transparent;
                width: 7rem;
                height: 2rem;
                background-color: rgba(49, 203, 158, 0.3);
                color:rgb(49, 203, 158);
                font-weight: 500;
                text-align: center;
                position: relative;
                outline: none;
                min-width: unset;
                cursor: pointer;
                user-select: none;
                margin-top: 2rem;
                margin-left: 2rem;
            }
            button:hover{
                background-color:#0C640C;
            }
        }
    }
    #img-login{
        max-width: 620px;
        max-height: 620px;
        border-radius: 35px 10px;
    }
`
