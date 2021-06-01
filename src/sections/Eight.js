import { Container, Content, Title, Paragraph } from '../components/Components'

const Eight = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          8. Logement
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          L’école étant située à Paris extramuros, les logements baissent
          considérablement, mais restent tout de même élevés étant donné que
          l’on se situe sur la région parisienne.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le site de l'école propose des logements étudiants à moins de 500
          €/mois.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Eight
