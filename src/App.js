
import axios from "axios"

import React from "react";



class App extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`)
      .then(res => {
        const categories = res.data;
        console.log(categories)
        this.setState({ categories});
      })
  }

  render() {
    return (
      <ul>
        { this.state.categories.map((e,i) => <li key={i}>{e}</li>)}
      </ul>
    )
  }
}
export default App;
