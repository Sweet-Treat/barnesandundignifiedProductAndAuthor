import React, { Component } from 'react';
import Tab from './tab.jsx';
import styled from 'styled-components';

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 50px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

`;

const TabContent = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //the tab text
      activeTab: this.props.children[0].props.label,
    };

    this.onClickTabItem = this.onClickTabItem.bind(this);

  }

  onClickTabItem(tab) {
    this.setState({ activeTab: tab });
  }
  render() {

    return (
      <div>
        {/*tabs Names*/}
        <TabList>
          {this.props.children.map((child) => {
            const label = child.props.label;

            return (
              <Tab
                activeTab={this.state.activeTab}
                key={label}
                label={label}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </TabList>
        {/*the tab content depends on which tab you select*/}
        <TabContent>
          {this.props.children.map((child) => {
            if (child.props.label !== this.state.activeTab) { return undefined; }
            return child.props.children;
          })}
        </TabContent>
      </div>
    );
  }
}

export default Tabs;
