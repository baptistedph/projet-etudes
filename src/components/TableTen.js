import styled from 'styled-components'

const TableTen = ({ styles, mobile }) => {
  return (
    <Grid
      color={styles.palette.blacks.b1}
      size={mobile ? styles.paragraphs.p2 : styles.paragraphs.p1}>
      <thead>
        <tr>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}
            colSpan="2">
            Besoins pour 3 ans
          </Th>
          <Th
            background={styles.palette.greens.g5}
            style={{ color: styles.palette.whites.w1 }}
            colSpan="2">
            Ressources pour 3 ans
          </Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>Ecole</Th>
          <Td>8500</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Alimentation
          </Th>
          <Td>8400</Td>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Revenu alternance
          </Th>
          <Td>17340</Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>Logement</Th>
          <Td>21600</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>Assurances</Th>
          <Td>750</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Td
            style={{
              textAlign: 'left',
              paddingLeft: '30px',
              fontStyle: 'italic',
            }}>
            Habitation
          </Td>
          <Td>255</Td>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Aide familiale
          </Th>
          <Td>11000</Td>
        </tr>
        <tr>
          <Td
            style={{
              textAlign: 'left',
              paddingLeft: '30px',
              fontStyle: 'italic',
            }}>
            Prêt
          </Td>
          <Td>495</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Forfait mobile
          </Th>
          <Td>750</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>Transports</Th>
          <Td>3600</Td>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Prêt étudiant
          </Th>
          <Td>18260</Td>
        </tr>
        <tr>
          <Th style={{ textAlign: 'left', paddingLeft: '20px' }}>Divers</Th>
          <Td>3000</Td>
          <Th style={{ border: 'none' }}></Th>
          <Td
            style={{
              border: 'none',
              borderRight: `solid 1px ${styles.palette.blacks.b1}`,
            }}></Td>
        </tr>
        <tr>
          <Th
            class="light align-left"
            background={styles.palette.greens.g2}
            style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Total
          </Th>
          <Th background={styles.palette.greens.g2}>46600</Th>
          <Th
            class="light align-left"
            background={styles.palette.greens.g2}
            style={{ textAlign: 'left', paddingLeft: '20px' }}>
            Total
          </Th>
          <Th background={styles.palette.greens.g2}>46600</Th>
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

export default TableTen
