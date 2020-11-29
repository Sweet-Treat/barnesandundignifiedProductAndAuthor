import 'jsdom-global/register'; //at the top of file , even  , before importing react
import Tabs from './tabs';
import ProductDetails from './productDetails.jsx';
import React from 'react';
import {shallow, mount} from 'enzyme';


const record = { 'isbn13': '9781524763169',
  'author': 'Barack Obama',
  'bookTitle': 'A Promised Land',
  'publisherName': 'Crown Publishing Group',
  'publisherLink': '/publisher',
  'publicationDate': '11/17/2020',
  'series': '',
  'bookCategory': 'Autobiography',
  'ageRange': '',
  'pages': 768,
  'salesRank': 1,
  'format': '',
  'editionDescription': '',
  'productDimensions': '6.40(w) x 9.40(h) x 1.50(d)'
};

describe ('Tabs React test', () => {
  it ('render Tabs', (done) => {

    const wrapper = mount(<Tabs>
      <div label="Product Details">
        <ProductDetails
          record={record}
        />
      </div>
      <div label="Author">
        About the author
      </div>
    </Tabs>);
    //console.log("wrapper", wrapper.debug());
    expect(wrapper.debug()).toMatchSnapshot();
    done();
  });

});


describe('Test Tabs component change', () => {
  let tabs;
  beforeEach(() => {
    tabs = mount(<Tabs>
      <div label="Product Details">
        <ProductDetails
          record={record}
        />
      </div>
      <div label="Author">
        About the author
      </div>
    </Tabs>);
  });

  it('Test for existance of two Tabs', (done) => {
    let tabsFound = tabs.find('ol').first().children().map(child => child.text());
    console.log('TABS FOUND', tabsFound);
    expect(tabsFound).toHaveLength(2);
    expect(tabsFound).toEqual(['Product Details', 'Author']);
    done();
  });

  it('Test Author Tab click', (done) => {
    // childAt(1) gives me the <Tab> of the author. Inside it, there is <li> .
    // we need to click the <li>
    let authorTab = tabs.find('ol').childAt(1).childAt(0);
    console.log('author tab before click',authorTab.debug());
    //console.log("tabs state", tabs.state());
    expect(tabs.state().activeTab).toEqual('Product Details');
    authorTab.simulate('click');
    expect(tabs.state().activeTab).toEqual('Author');
    //console.log("tabs state", tabs.state());
    done();
  });

});