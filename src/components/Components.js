import styled from 'styled-components'

const Title = styled.h2`
  font-size: ${props => props.size};
  color: ${props => props.color};
  line-height: ${props => props.size};
`

const Subtitle = styled.h3`
  font-size: ${props => props.size};
  font-weight: 600;
  color: ${props => props.color};
  line-height: ${props => props.size};
`

const Paragraph = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
  line-height: ${props => `calc(${1.5 * parseFloat(props.size)}px)`};
`

const Link = styled.a`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
  text-decoration: none;
  position: relative;
`

const Container = styled.section`
  padding: 100px ${props => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const Content = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export { Title, Subtitle, Paragraph, Link, Container, Content, Column, Row }
