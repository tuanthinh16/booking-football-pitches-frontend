import React from "react";
import styled from "styled-components";
import { POSTGROUP, POSTPERSON } from "../data/DATA";

export const Group = ()=>{

    return(
        <Wrapper>
            <FindGroup />
            <FindPerson />
        </Wrapper>
    );
}

export const Wrapper = styled.div`
    display: flex;
`

export const FindGroup=()=>{
    return(
        <FindContainer>
            <h1 id="findgroup"> Tìm Đội Đá Cùng </h1>
            <div className="content-post">
            {POSTGROUP?.map((row)=>(
                <div className="card-post">
                    <h3 id="title">{row.title}</h3>
                    <small id="smalltext">{row.username}{" at "}{row.timeStamp}</small><br></br>
                    <p>Vị Trí: {row.favorite}</p>
                    <p>{row.detail}</p>
                   <button className="btn-discusion">Xem</button>
                </div>
            ))}
            </div>
        </FindContainer>
    );
}
export const FindPerson = ()=>{
    return(
        <PersonContainer>
            <h1 id="findperson"> Tìm Người Đá Cùng </h1>
            <div className="content-post">
            {POSTPERSON?.map((row)=>(
                row.availd>0?(
                    <div className="card-post">
                        <h3 id="title">{row.title}</h3>
                        <small id="smalltext">{row.user_post}{" at "}{row.timeStamp}</small>
                        <hr></hr>
                        <p>Số Lượng Còn: {row.availd} Người</p>
                        <p id="place">Vị Trí Sân: {row.place} <small id="timestart">{" --- lúc "}{row.timestart}</small></p>
                        <p>Liên Hệ: {row.contact}</p>
                        <button className="btn-apply">Tham Gia Ngay</button>
                    </div>
                ):("")
                
            ))}
            </div>
        </PersonContainer>
    );
}

export const FindContainer = styled.div`
    margin-left: 1rem;
    min-width: 45%;
    #findgroup{
        color:white;
        font-weight: bold;
        padding: 2rem;
    }
    .content-post{
        
        overflow: hidden;
        display: inline-block;
        color: white;
        #smalltext{
            color: green;
        }
        .card-post{
            border-radius: 25px;
            padding: 2rem;
            background-color: #1C1E1C;
            margin: 1rem;
        }
        .btn-discusion{
            border-radius: 999px ;
            border:1px solid transparent;
            padding: 0 1rem 0 1rem;
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
        .btn-discusion:hover{
            background-color:#0C640C;
            width: 50%;
            
            float: center;
        }
    }
`

export const PersonContainer = styled.div`
    margin-left: 1rem;
    #findperson{
        color:white;
        font-weight: bold;
        padding: 2rem;
    }
    .content-post{
        overflow: hidden;
        display: inline-block;
        color: white;
        #smalltext{
            color: green;
        }
        .card-post{
            border-radius: 25px;
            padding: 1.5rem;
            background-color: #2B2E2C;
            opacity: 80%;
            margin: 1rem;
        }
        #place{
            color:aqua;
        }
        #timestart{
            color: red;
        }
        .btn-apply{
            border-radius: 999px ;
            border:1px solid transparent;
            padding: 0 1rem 0 1rem;
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
        .btn-apply:hover{
            background-color:#0C640C;
            width: 50%;
            
            float: center;
        }
        .btn-apply-disable{
            background-color: red;
            color: white;
            border-radius: 999px ;
            border:1px solid transparent;
            padding: 0 1rem 0 1rem;
            height: 2rem;
        }
    }
`