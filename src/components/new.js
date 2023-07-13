import React from "react";
import styled from "@emotion/styled";
import { NEW } from "../data/DATA";
export const New =()=>{
    console.log(NEW);
    return(
        <Wrapper>
            <div className="main-new">
                <p>Tin Tức Mới</p>
                <div className="new-content">
                    {NEW?.map((row)=>(
                        <div className="content"> {row.toppic.substring(0,23)}...</div>
                    ))}
                </div>
                <button id="button-view">Xem Thêm</button>
            </div>
        </Wrapper>
    );
}
export const Wrapper = styled.div`
    padding: 1rem 3rem 1rem 3rem;
    max-width: 100%;
    .main-new{
        border-radius: 999px;
        border: 1px soild transparent;
        display: flex;
        background-color: #505450;
        min-height: 2rem;
        color: white;
        p{
            padding: 0.5rem 2rem 0rem 2rem;
            float: center;
            text-align: center;
            font-size: 14px;
        }
        .new-content{
            background-color:#1C1E1C;
            border-radius: 25px;
            margin: 0.2rem 1rem 0.2rem 0rem;
            display: flex;
            .content{
               text-align: center;
               padding: 0.4rem 2rem 0rem 2rem;
               font-size: 14px;
            }
        }
        #button-view{
            margin: 0.4rem 2rem 0rem 1rem;
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
        #button-view:hover{
            background-color:#0C640C;
        }
    }
`