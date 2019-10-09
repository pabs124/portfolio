import React from "react"
import TypedReactDemo from "../components/Type"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section.js"
import Wave from "../components/Wave"


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Sahil Pabby"
          keywords={[`Full Stack`, `application`, `react`]}
        />
        <div className="Hero">
          <div className="HeroGroup">
            <h1><TypedReactDemo
              strings={[
                "Hey there 👋",
                " I'm Sahil 🤓",
                "I'm a FullStack Software </br> Developer 🖥 📱 ⌚️", 
                "Status: Available ✅",
                "My Projects: Scroll Down 👇"
              ]}
            /></h1>
            <Wave />
          </div>
        </div>
        <Section
          image={require("../images/siri.gif")}
          logo={require("../images/logo.png")}
          title="Steve - Jobs Finder Alexa Skill "
          titleLink="https://github.com/pabs124/Steve-Jobs-Finder"
          poster={require("../images/Stackathon.jpeg")}
          video={require("../video/Stackathon Presentation- Steve - Jobs Finder.mp4")}
          text="As a solo developer built an Alexa skill named Steve to find Jobs.
                I wrote the Skill using Alexa Skills Kit and the functions on AWS Lambda.
                Alexa made an API call to GitHub Jobs API to find the desired job in the desired
                location.
                If the users are interested in a job, Alexa sends them a link (sent using Twilio) to a
                webpage that has the details of the job and a link to send the resume."
        />
        <Section
          image={require("../images/translate.gif")}
          logo={require("../images/lingua.png")}
          poster={require("../images/lingua-1.jpeg")}
          video={require("../video/Capstone Presentation- Lingua.mp4")}
          title="Lingua - Language learning platform  "
          titleLink="https://github.com/1810-lingua"
          text="Along with three other developers built Lingua using
                JavaScript for Chrome Extension where users can add words they want to learn in
                their desired language.
                React Native, Redux & FireBase for the mobile app where users can look at the
                saved words & test their knowledge using flashcards.
                Users can take an image of an object and the app generates a flashcard with its
                translation and correct pronunciation.
                After they have marked the word as learned on the mobile app, we replace the
                English word with its translation on any website they visit."
        />
      </Layout>
    )
  }
}

export default IndexPage
