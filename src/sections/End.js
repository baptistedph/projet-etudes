import { Container, Content, Paragraph } from '../components/Components'

const End = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1}>
      <Content>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          En espérant, à travers cette présentation, vous avoir convaincu de me
          soutenir dans mon projet.
          <br />
          Bien cordialement.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '30px', textAlign: 'right' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Baptiste
        </Paragraph>
      </Content>
    </Container>
  )
}

export default End
