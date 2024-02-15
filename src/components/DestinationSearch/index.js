// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInputchange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const filteredPlacesList = destinationsList.filter(eachPlace =>
      eachPlace.name.includes(value),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="searchbox">
          <div>
            <input
              className="search-input"
              placeholder="Search"
              type="search"
              onChange={this.onSearchInputchange}
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>

        <ul className="places-container">
          {filteredPlacesList.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
