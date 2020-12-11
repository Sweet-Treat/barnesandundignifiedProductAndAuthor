import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';


const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px ;
  height: 500px;
`;

const TabAnimation = keyframes`
100% { left: 0; }
`;

const Slide = styled.div`
  position: relative;
  left: -1000px;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  animation: ${TabAnimation} 0.5s forwards;
`;
const TitleH2 = styled.h2`
  text-align: center;
  font-family: 'Playfair', Georgia, serif;
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: 500;
  text-align: center;
  width:100%;
`;

const Table = styled.table`
  font-family: Lato,sans-serif;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

const TableTr = styled.tr`
  height: 35px;
`;

const TableTd = styled.td`
  padding-left: 30px;
`;

const TableTh = styled.th`
  color: 26, 26, 92, 0.7rgba();
  font-size: 14px;
  font-weight: normal;
  text-align: left;
`;
const Link = styled.a`
&:link, &:visted, &:hover, &:active {
  color: rgb(16, 80, 9);
}
`;

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
      seriesRender = <TableTr>
        <TableTh>Series: </TableTh>
        <TableTd><Link href={this.props.record.seriesLink}>{series}</Link></TableTd>
      </TableTr>;
    }

    let editionRender;
    if (edition !== undefined && edition !== '') {
      editionRender = <TableTr>
        <TableTh>Edition description: </TableTh>
        <TableTd>{edition}</TableTd>
      </TableTr>;
    }

    let dimensionsRender;
    if (dimensions !== undefined && dimensions !== '') {
      dimensionsRender = <TableTr>
        <TableTh>Product dimensions: </TableTh>
        <TableTd>{dimensions}</TableTd>
      </TableTr>;
    }

    let sizeRender;
    if (size !== undefined && size !== '') {
      sizeRender = <TableTr>
        <TableTh>File size: </TableTh>
        <TableTd>{size}</TableTd>
      </TableTr>;
    }

    let soldByRender;
    if (sold !== '' && sold !== undefined) {
      soldByRender = <TableTr>
        <TableTh>Sold by:</TableTh>
        <TableTd>{sold}</TableTd>
      </TableTr>;
    }

    let formatRender;
    if (format !== '') {
      formatRender = <TableTr>
        <TableTh>Format:</TableTh>
        <TableTd>{format}</TableTd>
      </TableTr>;
    }

    let noteRender;
    if (note !== undefined && note !== '') {
      noteRender = <TableTr>
        <TableTh>Note</TableTh>
        <TableTd>{note}</TableTd>
      </TableTr>;
    }

    let ageRangeRender;
    if (age !== '') {
      ageRangeRender = <TableTr>
        <TableTh>Age range</TableTh>
        <TableTd>{age}</TableTd>
      </TableTr>;
    }

    const dateStr = this.props.record.publicationDate;
    let dateRender;
    let date = new Date(dateStr);
    dateRender = <TableTr>
      <TableTh>Publication Date: </TableTh>
      <TableTd>{date.toLocaleDateString('en-US')}</TableTd>
    </TableTr>;

    return (
      <Wrapper>
        <Slide>
          <TitleH2>Product Details</TitleH2>
          <Table>
            <tbody>
              <TableTr>
                <TableTh>ISBN-13: </TableTh>
                <TableTd>{this.props.record.isbn13}</TableTd>
              </TableTr>
              <TableTr>
                <TableTh>Publisher: </TableTh>
                <TableTd>
                  <Link href={this.props.record.publisherLink}>{this.props.record.publisherName}</Link>
                </TableTd>
              </TableTr>

              {dateRender}
              {seriesRender}
              {soldByRender}
              {formatRender}
              {editionRender}
              <TableTr>
                <TableTh>Pages: </TableTh>
                <TableTd>{this.props.record.pages}</TableTd>
              </TableTr>
              <TableTr>
                <TableTh>Sales Rank: </TableTh>
                <TableTd>{this.props.record.salesRank}</TableTd>
              </TableTr>

              {sizeRender}
              {dimensionsRender}
              {noteRender}
              {ageRangeRender}

            </tbody>
          </Table>
        </Slide>
      </Wrapper>


    );
  }
}


export default ProductDetails;