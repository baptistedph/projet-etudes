import styled from 'styled-components'

const Table = ({ styles, mobile }) => {
  return (
    <Grid
      color={styles.palette.blacks.b1}
      size={mobile ? styles.paragraphs.p2 : styles.paragraphs.p1}>
      <thead>
        <tr>
          <Th style={{ border: 'none' }}></Th>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}>
            Année 1
          </Th>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}>
            Année 2
          </Th>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}>
            Année 3
          </Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}>
            Recettes
          </Th>
          <Td
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}
            colSpan="3"></Td>
        </tr>
        <tr>
          <Th>Revenu alternance</Th>
          <Td>0</Td>
          <Td>7920</Td>
          <Td>9420</Td>
        </tr>
        <tr>
          <Th>Aide familiale</Th>
          <Td>2500</Td>
          <Td>6000</Td>
          <Td>2500</Td>
        </tr>
        <tr>
          <Th background={styles.palette.greens.g2}>Total recettes</Th>
          <Th background={styles.palette.greens.g2}>2500</Th>
          <Th background={styles.palette.greens.g2}>13920</Th>
          <Th background={styles.palette.greens.g2}>11920</Th>
        </tr>
        <tr>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}>
            Charges
          </Th>
          <Td
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}
            colSpan="3"></Td>
        </tr>
        <tr>
          <Th>Ecole</Th>
          <Td>8500</Td>
          <Td>0</Td>
          <Td>0</Td>
        </tr>
        <tr>
          <Th>Nourriture</Th>
          <Td>2800</Td>
          <Td>2800</Td>
          <Td>2800</Td>
        </tr>
        <tr>
          <Th>Logement (charges comprises)</Th>
          <Td>7200</Td>
          <Td>7200</Td>
          <Td>7200</Td>
        </tr>
        <tr>
          <Th>Assurance habitation</Th>
          <Td>85</Td>
          <Td>85</Td>
          <Td>85</Td>
        </tr>
        <tr>
          <Th>Forfait mobile</Th>
          <Td>250</Td>
          <Td>250</Td>
          <Td>250</Td>
        </tr>
        <tr>
          <Th>Transports</Th>
          <Td>1200</Td>
          <Td>1200</Td>
          <Td>1200</Td>
        </tr>
        <tr>
          <Th>Divers, imprévus</Th>
          <Td>1000</Td>
          <Td>1000</Td>
          <Td>1000</Td>
        </tr>
        <tr>
          <Th background={styles.palette.greens.g2}>Total charges</Th>
          <Th background={styles.palette.greens.g2}>21035</Th>
          <Th background={styles.palette.greens.g2}>12535</Th>
          <Th background={styles.palette.greens.g2}>12535</Th>
        </tr>
        <tr>
          <Th>Intérêts</Th>
          <Td>0</Td>
          <Td>0</Td>
          <Td>0</Td>
        </tr>
        <tr>
          <Th>Assurances</Th>
          <Td>165</Td>
          <Td>165</Td>
          <Td>165</Td>
        </tr>
        <tr>
          <Th background={styles.palette.greens.g2}>Résultats</Th>
          <Th background={styles.palette.greens.g2}>-18535</Th>
          <Th background={styles.palette.greens.g2}>1385</Th>
          <Th background={styles.palette.greens.g2}>-615</Th>
        </tr>
      </tbody>
    </Grid>
  )
}

const Grid = styled.table`
  border-collapse: collapse;
  margin-top: 50px;
  width: 100%;
  font-size: ${props => props.size};

  & td,
  & th {
    border-color: ${props => props.color};
    color: ${props => props.color};
  }

  @media (max-width: 576px) {
    word-break: break-all;
    font-size: 10px;
  }
`

const Td = styled.td`
  text-align: center;
  border: solid 1px ${props => props.color};
  background: ${props => props.background};
  padding: 8px 10px;
  color: ${props => props.color};

  @media (max-width: 576px) {
    padding: 8px 4px;
  }
`

const Th = styled.th`
  text-align: center;
  border: solid 1px ${props => props.color};
  background: ${props => props.background};
  padding: 8px 10px;
  color: ${props => props.color};

  @media (max-width: 576px) {
    padding: 8px 4px;
  }
`

export default Table
