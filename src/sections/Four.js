import {
  Container,
  Content,
  Title,
  Paragraph,
  Subtitle,
  Row,
  Column,
} from '../components/Components'
import styled from 'styled-components'

const Four = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          4. La formation
        </Title>
        <Subtitle
          size={styles.subtitles.s1}
          color={styles.palette.blacks.b2}
          style={{ marginTop: '20px' }}>
          4.1 Cursus
        </Subtitle>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le cursus du « Bachelor Développeur Web » s’étale sur 3 années, avec
          une année de formation initiale et deux années en alternance au cours
          desquelles je deviendrai concepteur et développeur de solutions
          digitales, c’est-à-dire un professionnel du développement des
          technologies de l’Internet.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le programme de la formation me permettra d’acquérir des compétences
          solides et polyvalentes que je pourrai mettre en application en
          entreprise dès la fin de la première année.
        </Paragraph>
        <Row
          style={{
            justifyContent: 'space-between',
            gridGap: '50px',
            flexWrap: 'wrap',
          }}>
          <Column style={{ flex: 1 }}>
            <Subtitle
              color={styles.palette.greens.g5}
              style={{ marginTop: '30px' }}
              size={styles.legends.l1}>
              Année 1 -
              <span style={{ fontSize: styles.legends.l2, marginLeft: '5px' }}>
                Initial
              </span>
            </Subtitle>
            <Paragraph
              style={{ marginTop: '20px' }}
              size={styles.paragraphs.p1}
              color={styles.palette.blacks.b1}>
              Enseignement à l’école : cours, projets et semaines intensives.
            </Paragraph>
            <Paragraph
              style={{
                marginTop: '20px',
                borderBottom: 'solid 2px black',
                alignSelf: 'flex-start',
              }}
              size={styles.paragraphs.p1}
              color={styles.palette.blacks.b1}>
              Modules enseignés
            </Paragraph>
            <Items>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Développement Front End et CSS
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Javascript
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                PHP
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Intégration
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Algorithmique
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Serveur, Git et Terminal
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Webdesign et UX
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Méthodologie de projet
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Humanité
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Anglais
              </Item>
            </Items>
          </Column>
          <Column style={{ flex: 1 }}>
            <Subtitle
              color={styles.palette.greens.g5}
              style={{ marginTop: '30px' }}
              size={styles.legends.l1}>
              Année 2 et 3 -
              <span style={{ fontSize: styles.legends.l2, marginLeft: '5px' }}>
                Alternance
              </span>
            </Subtitle>
            <Paragraph
              style={{ marginTop: '20px' }}
              size={styles.paragraphs.p1}
              color={styles.palette.blacks.b1}>
              3 semaines en entreprise, 1 semaine en cours.
            </Paragraph>
            <Paragraph
              style={{
                marginTop: '20px',
                borderBottom: 'solid 2px black',
                alignSelf: 'flex-start',
              }}
              size={styles.paragraphs.p1}
              color={styles.palette.blacks.b1}>
              Modules enseignés
            </Paragraph>
            <Items>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Développement mobile
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Front et Back End
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                React Native
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                API Graphql
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                DevOps
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Gestion de projet
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                UI
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Droit
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Développement personnel
              </Item>
              <Item
                size={styles.paragraphs.p1}
                color={styles.palette.blacks.b1}>
                Anglais
              </Item>
            </Items>
          </Column>
        </Row>
        <Paragraph
          style={{
            marginTop: '20px',
          }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          L’année 3 va permettre d’approfondir encore plus les différents
          langages et technologies vus en année 2.
        </Paragraph>
        <Subtitle
          size={styles.subtitles.s1}
          color={styles.palette.blacks.b2}
          style={{ marginTop: '40px' }}>
          4.2 Points forts
        </Subtitle>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          L’enseignement inculque des fondamentaux de la programmation et de
          l’UX/UI, du développement front et backend en passant par la gestion
          de projet en équipe et les devops.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le cursus forme des techniciens polyvalents, critiques, autonomes,
          capables de travailler en équipe, d’acquérir des compétences solides
          et de prendre du recul sur leurs propres pratiques.
        </Paragraph>
        <Subtitle
          size={styles.subtitles.s1}
          color={styles.palette.blacks.b2}
          style={{ marginTop: '40px' }}>
          4.3. Diplôme
        </Subtitle>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Au terme du cursus, la formation « Bachelor Développeur Web » délivre
          un Titre de Concepteur – Développeur de solutions digitales de niveaux
          6 enregistré au RNCP.
        </Paragraph>
      </Content>
    </Container>
  )
}

const Items = styled.ul`
  list-style: inside square;
  margin-top: 10px;
  min-width: 250px;
`

const Item = styled.li`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
  margin-top: 10px;
  line-height: ${props => `calc(${1.5 * parseFloat(props.size)}px)`};
`

export default Four
