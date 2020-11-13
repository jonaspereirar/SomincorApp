import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/LogoSignIn.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('É necessário digitar seu nome'),
  number: Yup.string().required('É necessário digitar seu número'),
  email: Yup.string()
    .email('Insira um email valido!')
    .required('É necessário digitar se e-mail'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('É necessário digitar sua senha'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, number, email, password }) {
    dispatch(signUpRequest(name, number, email, password));
  }

  return (
    <>
      <img src={logo} alt="SomincorApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Faça seu Registo</h1>
        <Input name="name" type="name" placeholder="Nome Completo" />
        <Input
          name="number"
          type="number"
          placeholder="Digite seu nº de colaborador"
        />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Form>
    </>
  );
}
