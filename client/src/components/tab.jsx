import React, { Component } from 'react';
import styled from 'styled-components';

const TabListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 1rem 1.3rem;
  color: rgba(22, 110, 22, 0.897);

  &:hover {
   text-decoration: underline;
  }
`;

const TabListActive = styled(TabListItem)`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
  color: black;
  text-decoration: underline;

`;

class Tab extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.label);
  }

  render() {

 
    let tab;
    if (this.props.activeTab === this.props.label) {
      return (<TabListActive onClick={this.onClick}>{this.props.label}</TabListActive>);
    } else {
      return (<TabListItem onClick={this.onClick}>{this.props.label}</TabListItem>);
    }

  }
}

export default Tab;