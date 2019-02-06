import React, { Component } from 'react';

import { 
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  FormGroup,
} from 'reactstrap';

import Xkcd from './Xkcd'
import { runInThisContext } from 'vm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      xkcd: null,
      comicList: [],
      newComicNumber: ''
    };
  }

  getComicList = () => {
    fetch('/api/comics')
    .then(res => res.json())
    .then(res => {
      var comicList = res.map( res => res.comic_name);
      this.setState({ comicList });
    });
  };


  handleInputChange = (e) => {
    this.setState({ newComicNumber: e.target.value });
  };

  handleAddComic = () => {
    fetch('/api/comics', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ xkcd: this.state.newComicNumber })
    })
    .then(res => res.json())
    .then(res => {
      this.getComicList();
      this.setState({ newComicNumber: '' });
    });
  };

  getXkcd = (xkcd) => {
    fetch(`/api/xkcd/${xkcd}`)
    .then(res => res.json())
    .then(xkcd => {
      this.setState({ xkcd });
    });
  }

  handleChangeComic = (e) => {
    this.getXkcd(e.target.value);
  }

  componentDidMount () {
    this.getComicList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Masivian Comics</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
          <Jumbotron>
            <h1 className="display-3">Masivian Comics</h1>
            <p className="lead">The current list of Xckd comics!</p>
          
            <InputGroup>
              <Input 
                placeholder="New comic number..."
                value={this.state.newComicNumber}
                onChange={this.handleInputChange}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.handleAddComic}>Add Comic</Button>
              </InputGroupAddon>
            </InputGroup>

          </Jumbotron>

          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current comic</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeComic}>
                { this.state.comicList.lenght === 0 && <option>No comics added.</option>  }
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Xkcd />
      </Container>
    );
  }
}

export default App;
