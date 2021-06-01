import styled from 'styled-components'
import { Content, Row, Column, Paragraph } from '../components/Components'

const Footer = ({ styles }) => {
  return (
    <Wrap background={styles.palette.greens.g5} padding={styles.paddings.p1}>
      <Content style={{ justifyContent: 'center' }}>
        <Row
          style={{
            justifyContent: 'space-between',
            gridGap: '50px',
            flexWrap: 'wrap',
          }}>
          <Column style={{ flex: 3, minWidth: '200px' }}>
            <Paragraph
              size={styles.paragraphs.p1}
              color={styles.palette.whites.w1}>
              Site réalisé par Baptiste DAUPHOUY pour le Crédit Agricole de
              Pontchâteau.
            </Paragraph>
            <Paragraph
              size={styles.paragraphs.p2}
              color={styles.palette.whites.w1}
              style={{ marginTop: '20px' }}>
              Projet d'études 2021-2024
            </Paragraph>
          </Column>
          <Column style={{ flex: 1 }}>
            <Paragraph
              size={styles.paragraphs.p1}
              color={styles.palette.whites.w1}>
              +33621629748
            </Paragraph>
            <Paragraph
              size={styles.paragraphs.p1}
              color={styles.palette.whites.w1}>
              bdauphouy@gmail.com
            </Paragraph>
          </Column>
        </Row>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.footer`
  padding: 30px ${props => props.padding};
  display: flex;
  justify-content: center;
  background: ${props => props.background};

  @media (max-width: 1280px) {
    & > div {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    & > div {
      width: 100%;
    }
  }
`

export default Footer
