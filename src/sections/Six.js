import { Container, Content, Title, Paragraph } from '../components/Components'

const Six = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          6. Motivations
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Soucieux de m’améliorer et autonome dans mon travail, je veux
          aujourd’hui intégrer une école de qualité qui saura répondre à mes
          nombreuses questions.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Si je souhaite partir sur la capitale pour mes études, c’est d’une
          part car Paris est une ville réputée pour avoir des écoles qui
          proposent un enseignement de qualité et que d’autre part c'est en
          métropole que se développent la majorité des gros projets. Cette
          expérience qui réunira des gens de toute la France, m'aidera à étoffer
          mon réseau de contacts.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Pour finir, j’ai eu l’occasion de voir le merveilleux travail de
          certains professeurs à HETIC, ce qui me conforte dans l’image que je
          me faisais de la qualité de l’enseignement qui y est délivré. J’ai
          conscience que ces 3 années seront intensives mais je suis prêt à
          fournir les efforts nécessaires pour y parvenir.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Six
