import React, { Component } from 'react';
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { setMessages } from "../actions";


class MessageList extends Component {

  // componentWillMount() {
  //   this.props.setMessages();
  // }

  render() {
    return (
      <div className="message-list">
        {this.props.message.map((message) => {
          return <Message key={message.created_at} message={message} />;
        })}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setMessages }, dispatch);
// }

// export default FlatList;
export default connect(mapStateToProps)(MessageList);
