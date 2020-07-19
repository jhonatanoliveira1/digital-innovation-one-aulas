import React, {Component} from 'react';

class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts);
    console.log('componentDidMount', loading);
  }
  componentDidUpdate() {
    const { loading } = this.props
    console.log('componentDidUpdate', loading);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido :(');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render() {
    const { posts } = this.props
    console.log('render', posts);
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        testes
      </div>
    )
  }
}

export default Twitter;
