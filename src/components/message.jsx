import React, { PureComponent } from "react";


// const Message = (props) => {
//   return (
//   <ul className="message">
//     {props.message.author}
//     {props.message.created_at}
//     {props.message.author}
//   </ul>
//   );
// };

class Message extends PureComponent {
  render() {
    return (
      <div className="message pl-4 py-2 bg-light">
        <div className="row">
          <h3>{this.props.message.author}</h3>
          <span className="ml-2 mt-2"> - {(new Intl.DateTimeFormat('fr-BE', { hour: 'numeric', minute: 'numeric' }).format(new Date(this.props.message.created_at)))}</span>
        </div>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
