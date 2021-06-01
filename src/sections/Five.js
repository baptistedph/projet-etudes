import { Container, Content, Title, Paragraph } from '../components/Components'

const Five = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          5. Genèse du projet
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Elevé dans une famille qui tolérait très largement l’outil
          informatique, j’ai rapidement développé au fil des années un goût pour
          ce dernier. Plus jeune, je faisais du montage photo et vidéo sur ma
          tablette.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Par la suite, lorsque j’ai acquis mon premier ordinateur, je me suis
          passionné pour la création musicale. Puis en classe de 3ème la
          programmation a fait son apparition dans mon viseur. Au départ,
          c’était simplement une découverte scolaire, puis j’ai rapidement voulu
          en savoir plus. A cette époque, je ne connaissais pas encore le
          développement web.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          A mon entrée au lycée, mon établissement proposait l’option «
          Informatique et Création Numérique », que j’ai choisi sans hésitation.
          C’est de cette manière que j’ai découvert le développement web et ça a
          été le déclic : je voulais devenir développeur web.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Cela fait maintenant trois ans que j’ai découvert la programmation et
          deux ans que je me suis spécialisé dans la branche du développement
          web. Grâce aux nombreuses ressources en ligne, je m'entraîne et me
          forme en autodidacte chaque jour.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Five
