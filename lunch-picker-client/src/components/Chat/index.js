import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  InputGroup,
  Modal
} from 'react-bootstrap';
import uuid from 'uuid';
import RealtimeClient from '../../iot/RealtimeClient';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.less';

const getClientId = () => 'web-client:' + uuid.v1();
const getMessageId = () => 'message-id:' + uuid.v1();

const User = user => (
  <ListGroupItem key={user.clientId}>{user.username}</ListGroupItem>
);

const Users = ({ users }) => (
  <div id="sidebar-wrapper">
    <div id="sidebar">
      <ListGroup>
        <ListGroupItem key="title">
          <i>Connected users</i>
        </ListGroupItem>
        {users.map(User)}
      </ListGroup>
    </div>
  </div>
);

const ChatMessages = ({ messages }) => (
  <div id="messages">
    <ListGroup>
      <ListGroupItem key="title">
        <i>Messages</i>
      </ListGroupItem>
      {messages.map(Message)}
    </ListGroup>
  </div>
);

const Message = message => (
  <ListGroupItem key={message.id}>
    <b>{message.username}</b> : {message.message}
  </ListGroupItem>
);

const ChatHeader = ({ isConnected }) => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>Serverless IoT chat demo</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>{isConnected ? 'Connected' : 'Not connected'}</NavItem>
    </Nav>
  </Navbar>
);

const ChatInput = ({ onSend }) => {
  const onSubmit = event => {
    onSend(this.input.value);
    this.input.value = '';
    event.preventDefault();
  };

  return (
    <Navbar fixedBottom fluid>
      <Col xs={9} xsOffset={3}>
        <Form inline onSubmit={onSubmit}>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Type your message"
              inputRef={ref => {
                this.input = ref;
              }}
            />
            <InputGroup.Button>
              <Button type="submit">Send</Button>
            </InputGroup.Button>
          </InputGroup>
        </Form>
      </Col>
    </Navbar>
  );
};

const ChatWindow = ({ users, messages, onSend }) => (
  <div>
    <Grid fluid>
      <Row>
        <Col xs={3}>
          <Users users={users} />
        </Col>
        <Col xs={9}>
          <ChatMessages messages={messages} />
        </Col>
      </Row>
    </Grid>
    <ChatInput onSend={onSend} />
  </div>
);

class UserNamePrompt extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: true };
  }

  render() {
    const onSubmit = event => {
      if (this.input.value) {
        this.props.onPickUsername(this.input.value);
        this.setState({ showModal: false });
      }
      event.preventDefault();
    };
    return (
      <Modal show={this.state.showModal} bsSize="sm">
        <Form inline onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Pick your username</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              type="text"
              placeholder="Type your username"
              inputRef={ref => {
                this.input = ref;
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Ok</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      clientId: getClientId(),
      isConnected: false
    };
  }

  connect = async username => {
    this.setState({ username });
    this.client = new RealtimeClient(this.state.clientId, username);
    await this.client.connect();
    this.setState({ isConnected: true });

    this.client.onMessageReceived((topic, message) => {
      console.log('on message receive: ', topic, message);
      switch (topic) {
        case 'client-connected':
          this.setState({ users: [...this.state.users, message] });
          break;

        case 'client-disconnected':
          this.setState({
            users: this.state.users.filter(
              user => user.clientId !== message.clientId
            )
          });
          break;

        case 'message':
          this.setState({
            messages: [...this.state.messages, message]
          });
          break;

        default:
          break;
      }
    });
  };

  onSend = message => {
    this.client.sendMessage({
      username: this.state.username,
      message: message,
      id: getMessageId()
    });
  };

  render() {
    return (
      <div>
        <ChatHeader isConnected={this.state.isConnected} />
        <ChatWindow
          users={this.state.users}
          messages={this.state.messages}
          onSend={this.onSend}
        />
        <UserNamePrompt onPickUsername={this.connect} />
      </div>
    );
  }
}

export default Chat;
