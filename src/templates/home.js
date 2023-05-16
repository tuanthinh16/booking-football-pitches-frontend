import React, { useState } from "react";
import styled from "@emotion/styled";
import { Header } from "../components/header";
import { New } from "../components/new";
import { SAN } from "../data/DATA";

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopDateTimePicker  } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Footer } from "../components/footer";
import { Group } from "../contents/group";

export default function Home(){
    const [ datetime, setDatetime ] = useState('');
    const [time,setTime] = useState('12:34');
    var token = localStorage.getItem('token');
    console.log(token)
    let sanTrong = 0;
    SAN.map((row)=>(
        row.status == 0?(
            sanTrong+=1
        )
            
        :""
    ))
    function handleChange(ev) {
        if (!ev.target['validity'].valid) return;
        const dt= ev.target['value'] + ':00Z';
        setDatetime(dt);
        }
    return(
        <Container>
            <Header/>
            <New/>
            <div className="home">
                <div className="action">
                    <h3>Sân Còn Trống : {sanTrong}</h3>
                    <p id="help-text">Xem các thông tin và tìm sự lựa chọn phù hợp với đội bóng của bạn</p>
                    <div className="card-detail">
                        
                        <p id="name"><b>Vị Trí : </b> {SAN[0]?.name}</p>
                        <p id="toppic">{SAN[0]?.toppic}</p>
                        <p id="soluong"><b>Số Lượng (Người) : </b>{SAN[0]?.value} {"( Sân "}{SAN[0]?.value}{" )"}</p>
                        <p id="detail"><b>Chi Tiết : </b><br></br>
                        {SAN[0]?.detail.substring(0,200)}...</p>
                        <p id="price"><b>Giá : </b>{SAN[0]?.price} VND/H</p>
                        <b id="timestamp">Thời Gian: </b><br></br>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                'DateTimePicker',
                                'MobileDateTimePicker',
                                'DesktopDateTimePicker',
                                'StaticDateTimePicker',
                                ]}
                            >
                                <DemoItem label="Từ">
                                    <DesktopDateTimePicker className='time' defaultValue={dayjs('2023-05-16T15:30')} />
                                </DemoItem>
                            </DemoContainer>
                            </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                'TimePicker',
                                'MobileTimePicker',
                                'DesktopTimePicker',
                                'StaticTimePicker',
                                ]}
                            >
                                <DemoItem label="Đến">
                                    <MobileTimePicker className='time' defaultValue={dayjs('2023-05-16T15:30')} />
                                </DemoItem>
                            </DemoContainer>
                            </LocalizationProvider>
                        <button id="button-detail">Chi Tiết</button>
                        <button id="button-booking">Đặt Sân</button>
                    </div>
                </div>
                <div className="show-info">
                    <img src={SAN[0]?.image}></img>
                </div>
            </div>
            <hr id="line"></hr>
            <Group />
            <Footer/>
        </Container>
    );
}
export const Container = styled.div`
    background-color: #131514;
    //min-height: 100rem;
    #line{
            border: 1px solid wheat;
            margin: 2rem 1rem 0 1rem;
        }
    .home{
        
        display: flex;
        .action{
            width: 30%;
            padding-left: 1rem;
            h3{
                color: green;
                //text-align: center;
            }
            #help-text{
                font-size: 12px;
                color: #5E655E;
            }
            .card-detail{
                background-color:#1C1E1C;
                color: white;
                padding: 1rem 1rem 1rem 2rem;
                border-radius: 20px;
                border: 1px soild transparent;
                #button-booking{
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
                #button-booking:hover{
                    background-color:#0C640C;
                }
                .time{
                    color:white;
                    background-color:rgba(49, 203, 158, 0.3);
                }
                #button-detail{
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
                }
                #button-detail:hover{
                    background-color:#197519;
                }
            }
        }
        .show-info{
            
            img{
                padding: 2rem 2rem 0rem 1rem;
                border-radius: 25px;
            }
        }
    }
   
`
