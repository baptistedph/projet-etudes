import Homepage from './sections/Homepage'
import Summary from './sections/Summary'
import One from './sections/One'
import Two from './sections/Two'
import Three from './sections/Three'
import Four from './sections/Four'
import Five from './sections/Five'
import Six from './sections/Six'
import Seven from './sections/Seven'
import Eight from './sections/Eight'
import Nine from './sections/Nine'
import Ten from './sections/Ten'
import End from './sections/End'
import Footer from './partials/Footer'
import { NavLink } from './components/Components'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const [goBackToSummary, setGoBackToSummary] = useState(false)

  const isMobile = () => {
    return window.innerWidth <= 1024
  }

  const scroll = () => {
    return window.scrollY > 2 * window.innerHeight
  }

  useEffect(() => {
    isMobile() ? setMobile(true) : setMobile(false)
    scroll() ? setGoBackToSummary(true) : setGoBackToSummary(false)
  }, [])

  window.addEventListener('resize', () => {
    isMobile() ? setMobile(true) : setMobile(false)
  })

  window.addEventListener('scroll', () => {
    scroll() ? setGoBackToSummary(true) : setGoBackToSummary(false)
  })

  const styles = {
    titles: {
      t1: mobile ? '50px' : '80px',
      t2: mobile ? '30px' : '50px',
    },
    subtitles: {
      s1: mobile ? '20px' : '30px',
    },
    paragraphs: {
      p1: mobile ? '18px' : '20px',
      p2: '15px',
    },
    legends: {
      l1: '20px',
      l2: mobile ? '12px' : '15px',
    },
    palette: {
      greens: {
        g1: '#f1fffb',
        g2: '#d9f9ef',
        g3: '#b2f5df',
        g4: '#72edc4',
        g5: '#00df94',
      },
      grays: {
        g1: '#94A3B8',
        g2: '#E2E8F0',
      },
      blacks: {
        b1: '#000000',
        b2: '#444444',
      },
      whites: {
        w1: '#ffffff',
      },
    },
    paddings: {
      p1: '5%',
    },
  }

  return (
    <>
      {goBackToSummary && (
        <NavItem>
          <NavLink
            href="#summary"
            data-text="Revenir au sommaire"
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}>
            Revenir au sommaire
          </NavLink>
        </NavItem>
      )}
      <Homepage styles={styles} />
      <Summary styles={styles} />
      <One styles={styles} />
      <Two styles={styles} />
      <Three styles={styles} />
      <Four styles={styles} />
      <Five styles={styles} />
      <Six styles={styles} />
      <Seven styles={styles} />
      <Eight styles={styles} />
      <Nine styles={styles} mobile={mobile} />
      <Ten styles={styles} mobile={mobile} />
      <End styles={styles} />
      <Footer styles={styles} />
    </>
  )
}

const NavItem = styled.div`
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
  display: inline-block;
  overflow: hidden;
  background: white;
  padding: 2px 5px;
`

export default App
