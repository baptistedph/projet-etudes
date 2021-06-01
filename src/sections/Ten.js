import { Container, Content, Title, Paragraph } from '../components/Components'
import TableTen from '../components/TableTen'

const Ten = ({ styles, mobile }) => {
  return (
    <Container padding={styles.paddings.p1} id="10">
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          10. Plan de financement
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Suite à l'évaluation financière de ma formation sur 3 ans, vous
          trouverez ci-dessous le plan de financement me permettant de mener à
          bien mon projet.
        </Paragraph>
        <TableTen styles={styles} mobile={mobile} />
      </Content>
    </Container>
  )
}

export default Ten
