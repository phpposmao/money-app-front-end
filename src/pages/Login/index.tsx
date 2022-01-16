import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

import homeImg from '../../assets/home.svg';

export default function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await api.post('sessions', data);

      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('userName', response.data.user.name);

      navigate('/dashboard');
    } catch(err) {
      alert('Falha no login, tente novamente');
    }
  }

  return(
    <Container>
      <section className='form'>
        <form onSubmit={handleLogin}>
          <h1>money app</h1>

          <h2>Faça seu login</h2>

          <input 
            placeholder='Seu e-mail'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            placeholder='Sua senha'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' className='button'>Entrar</button>

          <Link className='back-link' to='/register'>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={homeImg} alt='Home' />
    </Container>
  )
}
