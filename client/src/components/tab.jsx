import React, { Component } from 'react';

class Tab extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.label);
  }

  render() {

    let className = 'tab-list-item';

    if (this.props.activeTab === this.props.label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={this.onClick}
      >
        {this.props.label}
      </li>
    );
  }
}

export default Tab;