import React, { Component } from 'react';
import Tab from './tab.jsx';

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
      <div className="tabs">
        {/*tabs Names*/}
        <ol className="tab-list">
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
        </ol>
        {/*the tab content depends on which tab you select*/}
        <div className="tab-content">
          {this.props.children.map((child) => {
            if (child.props.label !== this.state.activeTab) { return undefined; }
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
