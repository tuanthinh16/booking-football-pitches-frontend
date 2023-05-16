import React from "react";
import styled from "@emotion/styled";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Login } from "../templates/login";
import Dialog from "@mui/material/Dialog";


const img = ['https://i.pinimg.com/564x/5c/31/0e/5c310e49115b10f176a0499ee21079cf.jpg','https://i.pinimg.com/564x/38/4f/de/384fde854a724f3b8a8783431a0f3b34.jpg']
export const Header=()=>{
    const onShow = (div)=>{
        var x = document.getElementById(div);
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }
    let token = localStorage.getItem('token');
    const onLoginForm =()=>{

    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Wrapper>
            <div className="logo">
                <img src={img[0]}></img>
                <p>NHAT HUNG FOOTBALL</p>
            </div>
            <div className="options" style={{'display': 'flex'}}>
                <div className="op">
                    <a href="#tag">Tin Tức</a>
                        <div className="op-contents">
                            <a href="#"> Bóng Đá Trong Nước</a>
                            <a href="#"> Champions League</a>
                            <a href="#"> Seagame</a>
                        </div>
                </div>
                <div className="op">
                    <a href="#tag">Lịch Bóng Đá</a>
                        <div className="op-contents">
                            <a href="#"> Việt Nam</a>
                            <a href="#"> Champions League</a>
                            <a href="#"> Seagame</a>
                        </div>
                </div>
                <div className="op">
                    <a href="#tag">Đặt Sân</a>
                    <div className="op-contents">
                        <a href="#"> Giao Hữu</a>
                        <a href="#"> Tổ Chức Giải</a>
                    </div>
                </div>
                <div className="op">
                    <a href="#tag">Tìm Đội</a>
                        <div className="op-contents">
                            <a href="#"> Giao Hữu</a>
                            <a href="#"> Tập Luyện</a>
                        </div>
                </div>
                <div className="op">
                    <a href="#tag">Ghép Đội</a>
                        <div className="op-contents">
                            <a href="#"> Tìm Đội</a>
                            <a href="#"> Chọn Đội</a>
                            <a href="#"> Xin Vào Đội</a>
                            <a href="#"> Tuyển Thành Viên</a>
                        </div>
                </div>
                <div className="op">
                    <a href="#tag">Dịch Vụ</a>
                    <div className="op-contents">
                        <a href="#"> Thuê Giày</a>
                        <a href="#"> Thuê Đồng Phục</a>
                        <a href="#"> Thuê Trọng Tài</a>
                    </div>
                </div>
            </div>
            <div className="left-content">
            <div className="account">
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{token.substring(0,2).toUpperCase()}</Avatar>
            </div>
            
            {
                token?(
                <div className="login">
                    <button className="login-button" disabled>Hi! {token}</button>
                </div>)
            :(
                <div className="login">
                    <button className="login-button" onClick={handleClickOpen}>LOGIN</button>
                </div>
            )
            }
            <div className="menu">
                <div className="menu-text">
                    Menu
                <div className="menu-contents">
                    <a href="#"> Về Chúng Tôi</a>
                    <a href="#"> Liên Hệ</a>
                    <a href="#"> Đóng Góp Ý Kiến</a>
                    <a href="#"> Đăng Xuất</a>
                </div>
            </div>
            </div>
            </div>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="lg"
            >
                <Login />
            </Dialog>
        </Wrapper>
    );
}
export const Wrapper = styled.div`
    display: flex;
    font-family: "Times New Roman";
    background-color:#1E211F;
    min-height: 3rem;
    font-size: 16px;
    color: #f9f9f9;
    padding: 0.5rem 1rem 0.5rem 1rem;
    .logo{
        display: flex;
        p{
            padding: 0.5rem 1rem 0rem 1rem;
            font-weight: bold;
        }
        img{
            max-width: 5rem;
            max-height: 3rem;
            border-radius: 10px;
        }
    }
    .options{
        padding-top: 1rem;
        .op{
            padding: 0rem 1rem 0rem 1rem;
            a{
                text-decoration: none;
                color: white;
            }
        }
        .op:hover{
            color: green;
        }
        .op:hover .op-contents{
            display: block;
        }
        .op-contents{
            display: none;
            position: absolute;
            background-color: rgb(49, 49, 49);
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 10px;
            margin-top: 0.2rem;
            a{
                float: none;
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                text-align: left;
                color: #f9f9f9;
            }
            a:hover{
                color: green;
            }
        }

    }
    .account{
        right: -1;
        float: right;
        padding: 0.2rem 1rem 0rem 1rem;
    }
    .menu{
        padding: 1rem 1rem 0rem 1rem; //tren - trai - duoi - phai
        font-weight: bold;
        .menu-text:hover{
            color: red;
        }
        .menu-text:hover .menu-contents{
            display: block;
        }
        .menu-contents{
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            a{
                float: none;
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                text-align: left;
            }
            a:hover{
                color: red;
            }
        }
        .menu-text{
            img{
                max-width: 3rem;
                min-height: 3rem;
            }
        }

    }
    .left-content{
        display: flex;
        position: absolute;
        right: 7rem;
        .login{
            padding: 0.5rem 1rem 0rem 1rem;
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
                
            }
            button:hover{
                background-color:#0C640C;
            }
        }
    }
`
