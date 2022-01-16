import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Container } from './styles';

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    const data = { 
      name,
      email,
      password,
    };

    try {
      const response = await api.post('users', data);

      alert(`Registro concluido com successo, por favor logue-se ${response.data.name}`);

      navigate('/');
    } catch(err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container>
      <div className='content'>
        <section>
          <h1>money app</h1>

          <h2>Cadastro</h2>
          <p>Faça seu cadastro, entre na plataforma e tenha controle sobre suas finanças.</p>

          <Link className='back-link' to='/'>
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            placeholder='E-mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='button' type='submit'>Cadastrar</button>
        </form> 
      </div>
    </Container>
  )
}