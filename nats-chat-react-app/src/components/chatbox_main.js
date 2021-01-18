import "../styling/App.css";
import Chatheader from "./chat_header";
import Chat from "./chat";

function Chatbox() {
  return (
    <div class="chat-box">
      <Chatheader />
      <Chat />
      <div class="chat-control">
        <input
          class="chat-input"
          type="text"
          placeholder="enter your message"
        />
      </div>
    </div>
  );
}

export default Chatbox;
