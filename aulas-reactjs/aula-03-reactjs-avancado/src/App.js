import React, {Component} from 'react';
import Twitter from './Twitter';

class App extends Component {

  state = {
    loading: false,
    actived: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render() {

    const posts = [
      {
        title: 'Exemplo',
        description: 'Descrição'
      },
      {
        title: 'Exemplo',
        description: 'Descrição'
      }
    ]

    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading}/>
        )}
      </div>
    )
  }
}

export default App;