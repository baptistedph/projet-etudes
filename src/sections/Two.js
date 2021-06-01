import { Container, Content, Title, Paragraph } from '../components/Components'

const Two = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          2. Nature du projet
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le projet est d’intégrer l’établissement HETIC, une école des métiers
          du Web sur la formation « Bachelor Developpeur Web », d’une durée de 3
          ans dans le but d’obtenir un diplôme de « Concepteur – Développeur de
          solutions digitales », équivalent à un Bac +3 reconnu par l’Etat.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Two
