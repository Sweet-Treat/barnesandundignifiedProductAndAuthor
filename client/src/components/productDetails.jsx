import React from 'react';
import ReactDOM from 'react-dom';
class ProductDetails extends React.Component {
  render() {
    //console.log('ProductDetails react instance');
    const series = this.props.record.series;
    const edition = this.props.record.editionDescription;
    const dimensions = this.props.record.productDimensions;
    const size = this.props.record.fileSize;
    const sold = this.props.record.soldBy;
    const format = this.props.record.format;
    const note = this.props.record.note;
    const age = this.props.record.ageRange;

    let seriesRender;
    if (series !== '') {
      seriesRender = <tr>
        <th>Series: </th>
        <td><a href={this.props.record.seriesLink}>{series}</a></td>
      </tr>;
    }

    let editionRender;
    if (edition !== undefined && edition !== '') {
      editionRender = <tr>
        <th>Edition description: </th>
        <td>{edition}</td>
      </tr>;
    }

    let dimensionsRender;
    if (dimensions !== undefined && dimensions !== '') {
      dimensionsRender = <tr>
        <th>Product dimensions: </th>
        <td>{dimensions}</td>
      </tr>;
    }

    let sizeRender;
    if (size !== undefined && size !== '') {
      sizeRender = <tr>
        <th>File size: </th>
        <td>{size}</td>
      </tr>;
    }

    let soldByRender;
    if (sold !== '' && sold !== undefined) {
      soldByRender = <tr>
        <th>Sold by:</th>
        <td>{sold}</td>
      </tr>;
    }

    let formatRender;
    if (format !== '') {
      formatRender = <tr>
        <th>Format:</th>
        <td>{format}</td>
      </tr>;
    }

    let noteRender;
    if (note !== undefined && note !== '') {
      noteRender = <tr>
        <th>Note</th>
        <td>{note}</td>
      </tr>;
    }

    let ageRangeRender;
    if (age !== '') {
      ageRangeRender = <tr>
        <th>Age range</th>
        <td>{age}</td>
      </tr>;
    }

    const dateStr = this.props.record.publicationDate;
    let dateRender;
    let date = new Date(dateStr);
    dateRender = <tr>
      <th>Publication Date: </th>
      <td>{date.toLocaleDateString('en-US')}</td>
    </tr>;

    return (
      <div className="wrapper">
        <div className="slide">
          <h2>Product Details</h2>
          <table>
            <tbody>
              <tr>
                <th>ISBN-13: </th>
                <td>{this.props.record.isbn13}</td>
              </tr>
              <tr>
                <th>Publisher: </th>
                <td>
                  <a href={this.props.record.publisherLink}>{this.props.record.publisherName}</a>
                </td>
              </tr>

              {dateRender}
              {seriesRender}
              {soldByRender}
              {formatRender}
              {editionRender}
              <tr>
                <th>Pages: </th>
                <td>{this.props.record.pages}</td>
              </tr>
              <tr>
                <th>Sales Rank: </th>
                <td>{this.props.record.salesRank}</td>
              </tr>

              {sizeRender}
              {dimensionsRender}
              {noteRender}
              {ageRangeRender}

            </tbody>
          </table>
        </div>
      </div>


    );
  }
}


export default ProductDetails;