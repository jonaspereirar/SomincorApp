import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '~/assets/LogoSignIn.svg';

const schema = Yup.object().shape({
  number: Yup.string().required('É necessário seu número'),
  password: Yup.string().required('É necessário sua senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ number, password }) {
    dispatch(signInRequest(number, password));
  }

  return (
  <>
    <img src={logo} alt="SomincorApp"/>

    <Form schema={schema} onSubmit={handleSubmit}>
    <h1>Faça seu login</h1>
      <Input name="number" icon={FiMail} type="number" placeholder="Digite seu nº" />
      <Input name="password" icon={FiLock} type="password" placeholder="Digite sua senha" />

      <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      <Link to="/register"><FiLogIn />Criar conta</Link>
      <Link to="/forgot"><FiMail />Recuperar senha</Link>

    </Form>
  </>
  );
}
