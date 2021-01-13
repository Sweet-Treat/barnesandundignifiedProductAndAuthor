// module 2 - added another tab. Added in later stage of the FEC
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const AboutTheAuthorContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 900px;
`;
const GridContainerAllCol = styled.div`
  display: grid;
  grid-template-columns: 17% auto;
  padding: 0 10px;`;

const GridContainer1Col = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 0 10px;`;

const GridContainer2Col = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 10px;`;

const GridImg = styled.img`
  max-width: 100%;
  padding: 10px 20px;
`;

const GridItem = styled.div`
  padding: 10px;
  text-align: left;
  font-family: Lato,sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;`;

const Paragraph = styled.div`
 color: #21282d;
 line-height: 28px;
 font-size: 14px;
 padding-left: 30px;
`;
const TitleH2 = styled.h2`
  text-align: center;
  font-family: 'Playfair', Georgia, serif;
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: 500;
  width:100%;
  padding: 20px 0 0 0;
`;
const LinkShowMore = styled.a`
  color: green;
  text-decoration: underline;
  cursor: auto;
  display: block;
  text-align: center;
  &:hover {
    color: green;
  }
`;

class AboutTheAuthor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    this.setState({showMore: !this.state.showMore});
  }
  render() {
    //console.log('AboutTheAuthor react instance');

    const author = this.props.authorInfo.author;
    const bio = this.props.authorInfo.bio;
    const dateOfBirth = this.props.authorInfo.dateOfBirth;
    const placeOfBirth = this.props.authorInfo.placeOfBirth;
    const dateOfDeath = this.props.authorInfo.dateOfDeath;
    const placeOfDeath = this.props.authorInfo.placeOfDeath;
    const education = this.props.authorInfo.education;
    const hometown = this.props.authorInfo.hometown;
    const website = this.props.authorInfo.website;

    const image = this.props.authorInfo.image;
    const newDateOfBirth = new Date(dateOfBirth);
    const newDateOfDeath = new Date(dateOfDeath);

    let itemsArr = [];

    let imageRender;
    if (image !== undefined && image !== '') {
      imageRender =
        <GridImg src={image}/>;
    }

    let bioRender;
    if (bio !== undefined && bio !== '') {
      bioRender = <GridItem>
        <Paragraph>{author} {bio}</Paragraph>
      </GridItem>;
    }

    let hometownRender;
    if (hometown !== undefined && hometown !== '') {
      hometownRender = <GridItem>
        <p><strong>Hometown:</strong></p>
        <p>{hometown}</p>
      </GridItem>;
      itemsArr.push(hometownRender);
    }

    let educationRender;
    if (education !== undefined && education !== '') {
      educationRender = <GridItem>
        <p><strong>Education:</strong></p>
        <p>{education}</p>
      </GridItem>;
      itemsArr.push(educationRender);
    }

    let dateOfBirthRender;
    if (dateOfBirth !== undefined && dateOfBirth !== '') {
      dateOfBirthRender = <GridItem>
        <p><strong>Date of Birth:</strong></p>
        <p>{newDateOfBirth.toLocaleDateString('en-US')}</p>
      </GridItem>;
      itemsArr.push(dateOfBirthRender);
    }

    let placeOfBirthRender;
    if (placeOfBirth !== undefined && placeOfBirth !== '') {
      placeOfBirthRender = <GridItem>
        <p><strong>Place of Birth:</strong></p>
        <p>{placeOfBirth}</p>
      </GridItem>;
      itemsArr.push(placeOfBirthRender);
    }
    let websiteRender;
    if (website !== undefined && website !== '') {
      websiteRender = <GridItem>
        <p><strong>Website:</strong></p>
        <p>{website}</p>
      </GridItem>;
      itemsArr.push(websiteRender);
    }

    let dateOfDeathRender;
    if (dateOfDeath !== undefined && dateOfDeath !== '') {
      dateOfDeathRender = <GridItem>
        <p><strong>Date of Death:</strong></p>
        <p>{newDateOfDeath.toLocaleDateString('en-US')}</p>
      </GridItem>;
      itemsArr.push(dateOfDeathRender);
    }

    let placeOfDeathRender;
    if (placeOfDeath !== undefined && placeOfDeath !== '') {
      placeOfDeathRender = <GridItem>
        <p><strong>Place of Death:</strong></p>
        <p>{placeOfDeath}</p>
      </GridItem>;
      itemsArr.push(placeOfDeathRender);
    }


    let showMoreLink = <LinkShowMore href="#" onClick={this.handleClick}>
      {this.state.showMore ? 'Show Less' : 'Show More'}
    </LinkShowMore>;

    if (itemsArr.length === 0) {
      showMoreLink = undefined;
    }
    if (this.state.showMore === false) {
      itemsArr = itemsArr.slice(0, 2);
    }

    return (
      <AboutTheAuthorContainer>
        <TitleH2>About the Author</TitleH2>
        <GridContainerAllCol>
          {imageRender}
          <div>
            <GridContainer1Col>
              {bioRender}
            </GridContainer1Col>
            <GridContainer2Col>
              {itemsArr.map((item, index) => (
                <React.Fragment key={index}>
                  { item }
                </React.Fragment>)
              )}
            </GridContainer2Col>
          </div>
        </GridContainerAllCol>
        {showMoreLink}
      </AboutTheAuthorContainer>
    );
  }
}


export default AboutTheAuthor;