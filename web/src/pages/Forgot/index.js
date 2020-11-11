import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/LogoSignIn.svg';

// import { Container } from './styles';

export default function Forgot() {
  function  handleSubmit(data) {
    console.tron.log(data)
  }
  return (
  <>
    <img src={logo} alt="SomincorApp"/>

    <Form onSubmit={handleSubmit}>
      <Input name="number" type="number" placeholder="Digite seu nº de colaborador" />
      <Input name="password" type="password" placeholder="Digite a nova senha" />

      <button type="submit">Recuperar senha</button>
      <Link to="/"><FiArrowLeft />Voltar</Link>

    </Form>
  </>
  );
}
