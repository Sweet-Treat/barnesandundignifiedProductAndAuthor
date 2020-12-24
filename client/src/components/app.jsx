import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ProductDetails from './productDetails.jsx';
import AboutTheAuthor from './aboutTheAuthor.jsx';
import Tabs from './tabs.jsx';
//import './app.css';

const TabsBox = styled.div`
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
        author: '',
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

      },
      author: {
        author: '',
        bio: '',
        dateOfBirth: '',
        placeOfBirth: '',
        dateOfDeath: '',
        placeOfDeath: '',
        education: '',
        hometown: '',
        website: '',
        image: '',
      },
      aboutTheAuthor: true,
    };
  }

  componentDidMount() {
    // getting productDetails
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
        console.log('error getting productDetails:', error);
      })
      // getting aboutTheAuthor
      .then (()=> {
        console.log('/author', this.state.book.author);
        return axios.get(`/author/${this.state.book.author}`);
      })
      .then((response)=> {
        console.log('get a specific author:', response);
        this.setState({author: response.data, aboutTheAuthor: true});
        return response;
      })
      .catch((error)=> {
        console.log('error getting AboutTheAuthor:', error);
        this.setState({aboutTheAuthor: false});
      });
  }

  render() {
    if (this.state.aboutTheAuthor === true) {
      return (
        <TabsBox>
          <Tabs>
            <Wrapper label="Product Details">
              <ProductDetails record={this.state.book}/>
            </Wrapper>
            <Wrapper label="About the Author">
              <AboutTheAuthor authorInfo={this.state.author}/>
            </Wrapper>
          </Tabs>
        </TabsBox>
      );
    } else {
      return (<ProductDetails record={this.state.book}/>);
    }

  }
}

export default App;

// to check the wrapper class if it is needed.