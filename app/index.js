var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img}
            alt='Avatar'
            style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Raunaq Singh'
    username='raunaqss'
    img='https://avatars3.githubusercontent.com/u/7628888?v=3&s=460'
  />,
  document.getElementById('app')
);