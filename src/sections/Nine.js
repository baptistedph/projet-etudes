import { Container, Content, Title, Paragraph } from '../components/Components'
import TableNine from '../components/TableNine'

const Nine = ({ styles, mobile }) => {
  return (
    <Container padding={styles.paddings.p1} id="9">
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          9. Recettes et charges
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          J'ai établis un tableau regroupant mes recettes et charges pour les 3
          années de la formation. Cette dernière se divisant en 1 année initiale
          à l'école, puis 2 ans en alternance (1 semaine à l'école et 3 semaines
          en entreprise), j'obtiendrai dès la deuxième année des revenus en tant
          qu'apprenti. D'après les grilles en vigueur, le salaire d'un apprenti
          de plus de 18 ans lors de la première année, s'élève à environ 660
          €/mois. La deuxième année il à environ 785 €/mois.
        </Paragraph>
        <TableNine styles={styles} mobile={mobile} />
      </Content>
    </Container>
  )
}

export default Nine
