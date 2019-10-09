import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
let FontAwesome = require('react-fontawesome')

const SectionGroup = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6)
  ),url(${props => props.image});
  height: 150vh;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 200vh;
    background-size: contain;
  }

  @media (min-width: 760px) {
    height: 150vh;
    background-size: contain;
  }

  @media (min-width: 940px) {
    height: 150vh;
    background-size: cover;
  }
  
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  margin: 0 80px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 640px) {
    grid-template-columns: 100%;
    margin: 20px 10px;
  }
`
const SectionTitle = styled.a`
  color: white;
  font-size: 50px;
  margin: 10px;
  line-height: 1.2;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);

  @media (max-width: 640px) {
    font-size: 30px;
  }
`

const SectionText = styled.p`
  margin: 0 40px;
  color: white;
  font-size: 25px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);

  @media (max-width: 640px) {
    font-size: 20px;
    width: 90vw;
    margin: 10px 20px;

  }
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Video = styled.video`
  justify-self: end;
  margin: 0;
  height:300px;
  outline: none;
  @media (max-width: 640px) {
    height: 25vh;
    margin: 10px;
    justify-self: center;
  }
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
    <SectionTitle target="_blank" rel="noopener noreferrer" href={props.titleLink}>{props.title}</SectionTitle>
    <Video width="auto"
          poster={props.poster}
          controls 
          muted
          src={props.video}
          />
    </SectionTitleGroup>
      <SectionText>{props.text}</SectionText>
  </SectionGroup>
)

export default Section
