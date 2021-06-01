import {
  Container,
  Content,
  Title,
  Paragraph,
  Subtitle,
} from '../components/Components'

const Seven = ({ styles }) => {
  return (
    <Container padding={styles.paddings.p1} id="7">
      <Content>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          7. Le métier de développeur web
        </Title>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le développeur web travaille au sein d’une agence de communication, en
          freelance, en SSII ou directement en entreprise.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Son but est de développer des interfaces Web adaptées pour son client
          ou son employeur. Il peut d’agir de sites Internet, d’applications web
          ou d’outils en ligne.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Une partie des développeurs web sont des développeurs informatiques
          qui se sont redirigés vers le Web, avec l’émergence d’Internet. Une
          nouvelle génération de développeurs web est aujourd’hui arrivée,
          certains ont des profils autodidactes.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          La culture informatique et web est importante pour la profession, et
          permet de mieux appréhender l’évolution des nouvelles technologies.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Les principaux langages utilisés pour créer des sites ou applications
          web sont le HTML, le CSS, le Javascript et le PHP. Les développeurs
          peuvent utiliser ce qu’on appelle des CMS, des logiciels visant à
          structurer plus facilement (et de façon plus automatisée) le contenu
          d’un site web. Les missions du développeur web sont multiples.
        </Paragraph>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Voici les principales :
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Analyse des besoins
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Il est d’abord nécessaire d’analyser les besoins réels pour le projet
          ainsi que les solutions techniques adaptées. Cette mission se conclut
          par la rédaction d’un cahier des charges.
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Conception du site
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Dans cette phase, le site est conçu en amont en respectant le cahier
          des charges. Son architecture (visuelle, technique) est définie ainsi
          que sa base de données.
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Développement
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          On entre ici dans la phase de développement pur qui consiste à rédiger
          les lignes de codes des différentes parties du site. Cette phase peut
          permettre d’effectuer des changements dans les objectifs établis,
          selon les problèmes rencontrés.
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Test & mise en production
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le site est testé aussi bien dans son fonctionnement technique que
          dans sa cohérence visuelle. Les éventuelles erreurs sont corrigées en
          collaboration avec les webdesigners et autres développeurs avant une
          mise en production qui précédera le lancement final du site.
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Support technique
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Une fois le site en ligne il faudra assurer un support en cas de
          dysfonctionnement ou encore pour effectuer des mises à jour.
        </Paragraph>
        <Subtitle
          color={styles.palette.greens.g5}
          style={{ marginTop: '20px' }}
          size={styles.legends.l1}>
          Veille
        </Subtitle>
        <Paragraph
          style={{ marginTop: '20px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          L’activité de veille est constante pour un développeur. Il doit à la
          fois être au courant des évolutions des outils et technologies
          existants (langages, frameworks, etc…) mais aussi des nouveautés en
          termes de tendances et de bonnes pratiques.
        </Paragraph>
        <Subtitle
          size={styles.subtitles.s1}
          color={styles.palette.blacks.b2}
          style={{ marginTop: '40px' }}
          id="7.1">
          7.1. Salaire
        </Subtitle>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le développeur web touche en moyenne 47 900 €/an en France, en salaire
          brut.
        </Paragraph>
        <Subtitle
          size={styles.subtitles.s1}
          color={styles.palette.blacks.b2}
          style={{ marginTop: '40px' }}
          id="7.2">
          7.2. Pourquoi ce métier ?
        </Subtitle>
        <Paragraph
          style={{ marginTop: '30px' }}
          size={styles.paragraphs.p1}
          color={styles.palette.blacks.b1}>
          Le métier est très nouveau et en pleine évolution, la demande est très
          élevée, le salaire est généralement attractif et il monte
          progressivement avec l’expérience.
        </Paragraph>
      </Content>
    </Container>
  )
}

export default Seven
