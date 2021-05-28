import React from "react";
import "./index.css";
import axios from "axios";
import Cookies from "js-cookie";

export const Chat = () => {
  const [text, setText] = React.useState("");
  const [recordedBlob, setRecordedBlob] = React.useState(null);
  const [recordState, setRecordState] = React.useState("stopped");
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const [messages, setMessages] = React.useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        let recordedChunks = [];
        recorder.addEventListener("dataavailable", (e) => {
          if (e.data.size > 0) {
            recordedChunks.push(e.data);
          }
        });
        recorder.addEventListener("stop", () => {
          const blob = new Blob(recordedChunks, {
            type: "audio/wav",
          });
          setRecordedBlob(blob);
          recordedChunks = [];
        });
        setMediaRecorder(recorder);
      });
  }, []);

  React.useEffect(() => {
    if (!recordedBlob) return;
    // TODO: send file to backend
  }, [recordedBlob]);

  const handleRecord = () => {
    if (recordState === "stopped") {
      mediaRecorder.start();
      setRecordState("recording");
    } else {
      mediaRecorder.stop();
      setRecordState("stopped");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages((value) => [...value, { sender: "me", content: text }]);
    setText("");
    axios
      .post(
        "/user/chatbot",
        { content: text },
        { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
      )
      .then((response) => {
        const data = response.data;
        setMessages((value) => [
          ...value,
          { sender: "bot", content: JSON.stringify(data) },
        ]);
      });
  };

  return (
    <>
      <div className="chat-frame">
        <div className="chat-header">Trợ lý ảo</div>
        <div className="chat-body">
          {messages.map((message, index) => {
            if (message.sender === "me")
              return (
                <React.Fragment key={index}>
                  <div className="msg-right">
                    <div className="msg-me">{message.content}</div>
                  </div>
                </React.Fragment>
              );

            const parsedMsg = JSON.parse(message.content);
            return (
              <React.Fragment key={index}>
                <div className="msg-left">
                  <div className="msg-bot">{parsedMsg.response}</div>
                  {parsedMsg.responseList.map((item) => (
                    <React.Fragment key={item.key}>
                      <div className="msg-bot">
                        <a href={item.value}>{item.key}</a>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={text}
            style={{ flexGrow: 1 }}
            onChange={handleChange}
          />
          <button type="button" onClick={handleRecord}>
            {recordState === "stopped" && <>Record</>}
            {recordState === "recording" && <>Stop</>}
          </button>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};
