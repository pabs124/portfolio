import React from "react"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScroll" : "Header"}
      >
        <div className="HeaderGroup">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto: pabs642@gmail.com"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/gmail.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={require("../images/SahilPabbyResume.pdf")}
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/overview-pages-2.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sahilpabby/"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/linkedin.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pabs124"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/github.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@sahilpabby"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/color/48/000000/medium-logo.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://simpletechman.com/"
          >
            <img class="logoHeader" src={require("../images/stm.png")} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCTw6BPT7W12Tb1QutRA9CEg"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/youtube-play.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/simpletechman/"
          >
            <img
              class="logoHeader"
              src="https://img.icons8.com/dusk/64/000000/instagram-new.png"
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
