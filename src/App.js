import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const Application = props => {
  const {appDetails, deleteApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = appDetails
  const deletingApp = () => {
    deleteApp(id)
  }

  return (
    <li className="application">
      <p className="time">{timeAccessed}</p>
      <div className="app-details">
        <div className="app">
          <img src={logoUrl} alt="domain logo" className="app-logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={deletingApp}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {searchValue: '', historyList: initialHistoryList}

  changeSearchInput = event => this.setState({searchValue: event.target.value})

  deletingApplication = itemId => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(each => each.id !== itemId),
    }))
  }

  renderApplicationsList = () => {
    const {searchValue, historyList} = this.state

    const searchResults = historyList.filter(eachApplication =>
      eachApplication.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    const itemsListLength = searchResults.length

    if (itemsListLength > 0) {
      return (
        <ul className="applications-list">
          {searchResults.map(eachApp => (
            <Application
              appDetails={eachApp}
              key={eachApp.id}
              deleteApp={this.deletingApplication}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="nothing-text-container">
        <p className="nothing-text">There is no history to show</p>
      </div>
    )
  }

  render() {
    return (
      <div className="history-app">
        <div className="history-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-bar">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              onChange={this.changeSearchInput}
              className="search-input"
            />
          </div>
        </div>
        <div className="applications">{this.renderApplicationsList()}</div>
      </div>
    )
  }
}

export default App
