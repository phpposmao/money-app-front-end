import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { Container } from './styles';

export default function Dashboard() {
  return(
    <>
      <Header />
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>
    </>
  );
}
