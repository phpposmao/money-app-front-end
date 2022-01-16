import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h1>money app</h1>
        <Link to='/transaction/new' className='link-button'>
          Nova transação
        </Link>
      </Content>
    </Container>
  )
}

