import 'jsdom-global/register'; //at the top of file , even  , before importing react
import ProductDetails from './productDetails';
import React from 'react';
import { mount} from 'enzyme';



describe ('ProductDetails React test', () => {
  it ('render ProductDetails', (done) => {
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
    const wrapper = mount(<ProductDetails record={record}/>);
    //console.log("wrapper", wrapper.debug());
    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.containsMatchingElement(<tr>
      <th>
        ISBN-13:
      </th>
      <td>
        9781524763169
      </td>
    </tr>)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<tr>
      <th>
        Publisher:
      </th>
      <td>
        <a href="/publisher">
          Crown Publishing Group
        </a>
      </td>
    </tr>)).toBeTruthy();
    done();
  });
});

