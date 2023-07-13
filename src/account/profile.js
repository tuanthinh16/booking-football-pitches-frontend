import styled from '@emotion/styled'
import React, { useState,useEffect } from 'react'
import { useParams } from "react-router";
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { getAPI } from '../service/api';
import { DataGrid } from "@mui/x-data-grid";


const getProfileAPI = (usr)=>{
    return getAPI('/get-user/'+usr);
}

const getHistoryAPI = (usr)=>{
    return getAPI('/get-history/'+usr);
}
const col = [
    {field:'user_id',headerName:'User ID',width:90},
    {field:'token_key',headerName:'Token Key',width:100},
    {field:'created',headerName:'Login At',width:200},
    {field:'expiry',headerName:'Time Avalid',width:200},
    {field:'digest',headerName:'Digest',width:500}
]
export const Profile = () => {
    let { usr } = useParams();
    const [data,setData] = useState([]);
    const [history,setHistory] = useState([]);
    const [id,setID] = useState(0);
    useEffect(() => {
        loadProfile();
        loadHistory();
    }, []);
    const loadProfile =async()=>{
        try {
            const rs = await getProfileAPI(usr);
            if(rs){
                //console.log(rs)
                setData(rs['data']);
                setID(rs['data']['id'])

            }
        } catch (error) {
            
        }
    }
    const loadHistory = async()=>{
        try {
            const rs = await getHistoryAPI(usr);
            if(rs){
                console.log(rs['data']['data'])
                setHistory(rs['data']['data'])
            }
        } catch (error) {
            
        }
    }
    const rows = history?.map((item,index) => ({
        id:index+1,
        user_id: item.user_id, // Use a unique identifier as the row ID
        token_key: item.token_key,
        created: item.created,
        expiry: item.expiry,
        digest: item.digest,
      }));
    return (
        <Wrapper>
            <Header/>
            <div className='header-content'>
            <div className='image'>
                IMG
            </div>
            <div className='name'>
                <h2>Fullname: {data[0]?.first_name}{' '}{data[0]?.last_name}</h2>
                <h5>Username: {data[0]?.username}</h5>
                <h5>Email: {data[0]?.email}</h5>
                <small>Create at: {data[0]?.date_joined}</small>
                <p>Last login: {data[0]?.last_login}</p>
            </div>
            </div>
            <div className='login-history'>
                <h1>Lich su tai khoan</h1>
                <div className='data-history'>
                    <DataGrid
                        rows={rows}
                        columns={col}
                        pageSize={8}
                        rowsPerPageOptions={[5]}
                        
                        />
                </div>
            </div>

            <Footer />
        </Wrapper>
    )
}
export const Wrapper = styled.div`
    background-color: #282c34;
    .header-content{
        display: flex;
        padding: 2rem;
        margin: 2rem;
        border-radius: 20px;
        background-color: gray;
        max-width: 90%;
        
        .image{
            width: 200px;
        }
        .name{
            max-width: 50%;
        }
    }
    .login-history{
        background-color: #A9A4A4;
        color:white;
        max-width: 90%;
        padding: 2rem;
        margin: 2rem;
        border-radius: 20px;
    }
    .data-history{
        margin:1rem;
        border-radius: 20px;
    }
`