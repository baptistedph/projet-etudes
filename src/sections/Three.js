import {
  Container,
  Content,
  Title,
  Paragraph,
  Subtitle,
} from '../components/Components'
import styled from 'styled-components'

const Three = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          3. L’école
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          HETIC (Hautes Etudes des Technologies et de l’Information et de la
          Communication) est un établissement privé d’enseignement supérieur
          fondé en 2002 et spécialisé dans le numérique et l’Internet. Son
          campus est situé à Montreuil en France. L’école est réputée pour être
          la n°1 des écoles du web en France, avec 98% de CDI signés avant la
          fin du cursus.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Dès la première année, les étudiants ont les compétences pour proposer
          leurs projets à différentes organisations internationales et ces
          derniers sont régulièrement récompensés.
        </Paragraph>

        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '30px' }}
          size={styles.legends.l1}>
          Localisation d'HETIC
        </Subtitle>
        <Iframe
          title="localisation d'hetic"
          class="localisation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.064537272478!2d2.417889436422182!3d48.85186246497188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67283047127a9%3A0x5a597564e51389ac!2sHETIC!5e0!3m2!1sfr!2sfr!4v1600422422273!5m2!1sfr!2sfr"
        />
      </Content>
    </Container>
  )
}

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  margin-top: 30px;
`

export default Three
