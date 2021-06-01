import styled from 'styled-components'
import {
  Container,
  Content,
  Subtitle,
  Column,
  Paragraph,
} from '../components/Components'

const Homepage = ({ styles }) => {
  return (
    <Container
      style={{ height: '100vh', paddingTop: '0', paddingBottom: '0' }}
      padding={styles.paddings.p1}>
      <Content>
        <Header>
          <Paragraph
            size={styles.paragraphs.p1}
            color={styles.palette.blacks.b1}>
            Années 2021-2024
          </Paragraph>
        </Header>
        <Column
          style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(calc(-50%))',
          }}>
          <Title size={styles.titles.t1} color={styles.palette.blacks.b1}>
            Projet
            <br />
            d'études
          </Title>
          <Subtitle
            size={styles.subtitles.s1}
            color={styles.palette.blacks.b2}
            style={{ marginTop: '20px' }}>
            Baptiste DAUPHOUY
          </Subtitle>
          <Hetic src="./hetic.webp" />
        </Column>
        <Portrait src="./portrait.webp" />
      </Content>
    </Container>
  )
}

const Header = styled.header`
  height: 100px;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
`

const Title = styled.h1`
  font-size: ${props => props.size};
  color: ${props => props.color};
  line-height: ${props => props.size};
`

const Hetic = styled.img`
  width: 200px;
  margin: 30px -15px;
`

const Portrait = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 60%;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  object-fit: cover;
  object-position: 50px 100px;
  background: url('./portrait.webp');
  background-size: cover;

  @media (max-width: 576px) {
    display: none;
  }
`

export default Homepage
