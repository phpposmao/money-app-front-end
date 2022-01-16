import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  const userId = localStorage.getItem('userId') as string;

  useEffect(() => {
    api.get('transactions', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setTransactions(response.data);
    })
  }, [userId]);

  return(
    <Container>
      <table>
        <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-Br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-Br').format(
                  new Date(transaction.created_at)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
