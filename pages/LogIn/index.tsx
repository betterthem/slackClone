import React, { useCallback, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useSWR from 'swr';

import useInput from '@hooks/useInput';
import fetcher from '@utils/fetcher'
import { Form, Label, Header, Input, LinkContainer, Button, Error } from '@pages/SignUp/styles'

import axios from 'axios';

const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const [logInError, setLogInError] = useState('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback((e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogInError('');
    axios
      .post('http://localhost:3095/api/users/login',
        { email, password },
        { withCredentials: true },
      )
      .then((response) => {
        mutate(response.data, { revalidate: false });
      })
      .catch((error) => {
        setLogInError(error.response.data);
      });
  }, [email, password]);

  if (data) { // 로그인해서 내 정보가 생기면
    return <Navigate replace to="/workspace/sleact/channel/일반" />
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  )
}

export default LogIn;