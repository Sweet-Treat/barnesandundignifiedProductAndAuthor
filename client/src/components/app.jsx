import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ProductDetails from './productDetails.jsx';
import Tabs from './tabs.jsx';
//import './app.css';

const TabsBox = styled.div`
  width: 572px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px ;
  height: 300px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        isbn13: '',
        publisherName: '',
        publisherLink: '',
        publicationDate: '',
        series: '',
        seriesLink: '',
        editionDescription: '',
        pages: undefined,
        salesRank: undefined,
        productDimensions: '',
        fileSize: '',
        note: '',
        ageRange: '',
        soldBy: '',
        format: '',

      }
    };
  }

  componentDidMount() {
    console.log('ISBN13 Props:', this.props.isbn13);
    return axios.get(`/products/${this.props.isbn13}`)
      .then((response)=> {
      // handle success
        console.log('get a specific book:', response);
        this.setState({book: response.data});
        return response;
      })
      .catch((error)=> {
      // handle error
        console.log('error:', error);
      });
  }

  render() {
    return (
      <TabsBox>
        <Tabs>
          <Wrapper label="Product Details">
            <ProductDetails
              record={this.state.book}
            />
          </Wrapper>
          <Wrapper label="Author">
            About the author
          </Wrapper>
        </Tabs>
      </TabsBox>
    );
  }
}

export default App;

// to check the wrapper class if it is needed.