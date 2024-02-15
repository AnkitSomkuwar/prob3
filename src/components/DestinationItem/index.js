// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails
  return (
    <li className="place-card">
      <img src={imgUrl} alt={name} className="place-img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
