import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetails from './productDetails.jsx';
import Tabs from './tabs.jsx';
//import './app.css';


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
    return axios.get(`http://localhost:5001/products/${this.props.isbn13}`)
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
      <div className="tabsBox">
        <Tabs>
          <div label="Product Details">
            <ProductDetails
              record={this.state.book}
            />
          </div>
          <div label="Author">
            About the author
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;