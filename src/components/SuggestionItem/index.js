// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onclickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-text">{suggestion}</p>
      <button className="button" type="button" onClick={onclickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="suggestion-logo"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
