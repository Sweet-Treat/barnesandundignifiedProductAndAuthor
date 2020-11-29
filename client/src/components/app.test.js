import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './app';
import register from 'ignore-styles';


const exampleRecord =
  {
    'isbn13': '9781571311931',
    'author': 'Aimee Nezhukumatathil',
    'bookTitle': 'World of Wonders: In Praise of Fireflies, Whale Sharks, and Other Astonishments (B&N Exclusive Gift Edition)',
    'publisherName': 'Milkweed Editions',
    'publisherLink': '/publisher',
    'publicationDate': '12/02/2020',
    'series': '',
    'bookCategory': 'Nonfiction',
    'ageRange': '',
    'pages': 184,
    'salesRank': 311,
    'format': '',
    'editionDescription': '',
    'productDimensions': '6.50(w) x 1.50(h) x 9.50(d)'
  };

jest.mock('axios', () => {

  return {
    get: jest.fn(() => Promise.resolve({data: exampleRecord} )),
  };
});

const axios = require('axios');

it ('fetch book record on #componentDidMount', async (done) => {
  const wrapper = await shallow(<App isbn13={'9781571311931'}/>);
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith('http://localhost:5001/products/9781571311931');
  // console.log(app.state());

  expect(wrapper.state()).toHaveProperty('book', exampleRecord);
  done();

  // Promises way:
  // app
  //   .instance()
  //   .componentDidMount()
  //   .then(() => {
  //     expect(axios.get).toHaveBeenCalled();
  //     expect(axios.get).toHaveBeenCalledWith('http://localhost:5001/products/9781571311931');
  //     expect(app.state()).toHaveProperty('book', exampleRecord);
  //     done();
  //   });
});

it ('should match the snapshot', async (done) => {
  const wrapper = await mount(<App isbn13={'9781571311931'}/>);
  expect(wrapper.debug()).toMatchSnapshot();
  done();
})