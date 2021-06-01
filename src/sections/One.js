import { Container, Content, Title, Paragraph } from '../components/Components'

const One = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1} id="1">
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          1. Présentation personnelle
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Je m’appelle Baptiste DAUPHOUY, j’ai 17 ans et je suis en classe de
          terminale générale spécialités mathématiques et sciences économiques
          et sociales avec option mathématiques expertes au lycée Saint-Sauveur
          à Redon.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default One
