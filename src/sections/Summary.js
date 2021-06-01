import styled from 'styled-components'
import {
  Container,
  Content,
  Title,
  NavLink,
  NavItem,
} from '../components/Components'

const Summary = ({ styles }) => {
  return (
    <Container
      style={{ minHeight: '100vh' }}
      id="summary"
      padding={styles.paddings.p1}>
      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Title size={styles.titles.t2}>Sommaire</Title>
        <Nav style={{ marginTop: '30px' }}>
          <ul>
            <NavItem>
              <NavLink
                href="#1"
                data-text="1. Présentation personnelle"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                1. Présentation personnelle
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#2"
                data-text="2. Nature du projet"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                2. Nature du projet
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#3"
                data-text="3. L'école"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                3. L'école
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#4"
                data-text="4. La formation"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                4. La formation
              </NavLink>
            </NavItem>
            <ul>
              <NavItem>
                <NavLink
                  href="#4.1"
                  data-text="4.1. Cursus"
                  color={styles.palette.blacks.b2}
                  style={{ marginLeft: '30px' }}
                  size={styles.subtitles.p2}>
                  4.1. Cursus
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#4.2"
                  data-text="4.2. Points forts"
                  color={styles.palette.blacks.b2}
                  style={{ marginLeft: '30px' }}
                  size={styles.subtitles.p2}>
                  4.2. Points forts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#4.3"
                  data-text="4.3. Diplôme"
                  color={styles.palette.blacks.b2}
                  style={{ marginLeft: '30px' }}
                  size={styles.subtitles.p2}>
                  4.3. Diplôme
                </NavLink>
              </NavItem>
            </ul>
            <NavItem>
              <NavLink
                href="#5"
                data-text="5. Genèse de projet"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                5. Genèse de projet
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#6"
                data-text="6. Motivations"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                6. Motivations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#7"
                data-text="7. Le métier de développeur web"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                7. Le métier de développeur web
              </NavLink>
            </NavItem>

            <ul>
              <NavItem>
                <NavLink
                  href="#7.1"
                  data-text="7.1. Salaire"
                  color={styles.palette.blacks.b2}
                  style={{ marginLeft: '30px' }}
                  size={styles.subtitles.p2}>
                  7.1. Salaire
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#7.2"
                  data-text="7.2. Pourquoi ce métier ?"
                  color={styles.palette.blacks.b2}
                  style={{ marginLeft: '30px' }}
                  size={styles.subtitles.p2}>
                  7.2. Pourquoi ce métier ?
                </NavLink>
              </NavItem>
            </ul>
            <NavItem>
              <NavLink
                href="#8"
                data-text="8. Logement"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                8. Logement
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#9"
                data-text="9. Recettes et charges"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                9. Recettes et charges
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#10"
                data-text="10. Plan de financement"
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                10. Plan de financement
              </NavLink>
            </NavItem>
          </ul>
        </Nav>
      </Content>
    </Container>
  )
}

const Nav = styled.nav``

export default Summary
