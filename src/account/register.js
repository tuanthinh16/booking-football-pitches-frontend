import React, { useState } from 'react';
import styled from 'styled-components';
import { postAPI } from '../service/api';
import { useSnackbar } from 'notistack';
import { useNavigate  } from 'react-router-dom';


const FormContainer = styled.div`
  padding-top: 5rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const FootballImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

const RegisterAPI = (data)=>{
  return postAPI('/register/',data);
}

const RegisterForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useNavigate ();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const onValueChange =(inputKey)=> (e)=>{
    setFormData((prev)=>({...prev,[inputKey]:e.target.value}))
}

  const handleSubmit = async() => {
    const data = new FormData();
    data.append('username',formData.userName);
    data.append('email',formData.email);
    data.append('password',formData.password);

    try {
      const rs = await RegisterAPI(data);
      
      if(rs){
        history('/login');
        enqueueSnackbar('Đăng ký thành công!',{variant:'success'} );
      }
    } catch (error) {
        console.log('err:'+error.message);
        enqueueSnackbar('Vui lòng thử lại !',  {variant:'error'});
    }
  };

  return (
    <FormContainer>
      <FootballImage src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-bong-da-dep.jpg" alt="Football" />
      <FormTitle>Register</FormTitle>
        <FormGroup>
          <FormLabel htmlFor="username">Username:</FormLabel>
          <FormInput
            type="text"
            id="Username"
            name="username"
            onChange={onValueChange('userName')}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onValueChange('email')}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onValueChange('password')}
          />
        </FormGroup>
        <FormButton type="submit" onClick={handleSubmit}>Register</FormButton>
    </FormContainer>
  );
};

export default RegisterForm;
