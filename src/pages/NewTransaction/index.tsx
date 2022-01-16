import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


export default function NewTransaction() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const user_id = localStorage.getItem('userId')

  async function handleNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
      user_id,
    };

    try {
      await api.post('transactions', data)

      navigate('/dashboard');
    } catch(err) {
      alert('Erro ao cadastrar transação, tente novamente.')
    }
  }

  return (
    <Container>
      <div className='content'>
        <section>
          <h1>money app</h1>

          <h2>Cadastrar nova transação</h2>
        </section>

        <form onSubmit={handleNewTransaction}>
          <input 
            placeholder='Título da transação'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input 
            placeholder='Valor em reais'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
          <TransactionTypeContainer>
            <RadioBox
              type='button'
              onClick={() => { setType('deposit'); }}
              isActive={type === 'deposit'}
              activeColor='green'
            >
              <img src={incomeImg} alt='Entrada' />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type='button'
              onClick={() => { setType('withdraw'); }}
              isActive={type === 'withdraw'}
              activeColor='red'
            >
              <img src={outcomeImg} alt='Saida' />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button className='button' type='submit'>Cadastrar</button>
        </form>
        
        <Link className='back-link' to='/dashboard'>
          Voltar para home
        </Link>
      </div>
    </Container>
  )
}