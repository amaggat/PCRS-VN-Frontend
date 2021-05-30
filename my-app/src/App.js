import Page from "./Pages/Page";
import { useState } from "react";
import styled from "styled-components";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

import { Widget, addResponseMessage, addLinkSnippet, toggleWidget, addUserMessage, renderCustomComponent, deleteMessages, toggleMsgLoader} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
import { sendMessage, sendRecording } from './Client/AccountService';
import './App.css';

const RecordButtonWrapper = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
    position: fixed;
    right: 70px;
    width: 60px;
    z-index: 99999;
`;

const OnClickOverlay = styled.div`
    bottom: 0;
    width: 60px;
    height: 60px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 99999;
    cursor: pointer;
`

const RecordButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E60001;
    font-size: x-large;
    color: white;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 2px 10px 1px #b5b5b5;
    height: 60px;
    width: 60px;
    margin-top: 10px;
    cursor: pointer;
`;
function App() {
    const [showRecordButton, setShowRecordButton] = useState(false);
    const [recordState, setRecordState] = useState(null);
    const handleSendMessage = async (newMessage) => {
        const result = await sendMessage(newMessage);
        if (result.data) {
            addResponseMessage(result.data.response);
            const productList = result.data.responseList || [];
            productList.forEach(product => {
                addLinkSnippet({
                    title: product.key || 'No name',
                    link: product.value || 'nolink.com',
                    target: '_blank'
                })
            });
        }
    }

    const handleRecordClick = () => {
        if (recordState === RecordState.START){
            deleteMessages(0);
            setRecordState(RecordState.STOP);
        }
        else {
            renderCustomComponent("div", {className: 'dot-typing'});
            setRecordState(RecordState.START);
        }
    }

    const handleSendRecording = async (recording) => {
        try {
            const result = await sendRecording(recording);
            if (result.data) {
                addUserMessage(result.data.response || "");
                handleSendMessage(result.data.response || "");
            }
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    const onRecordStop = (audioData) => {
        console.log('Record: ', audioData);
        handleSendRecording(audioData.blob);
    }

    const handleChatWidgetClick = () => {
        setShowRecordButton(!showRecordButton);
        toggleWidget();
    }

    const recordButton = (
        <RecordButtonWrapper>
            <RecordButton onClick={handleRecordClick}>
                {
                    recordState === RecordState.STOP || recordState === null
                        ? <i class="fas fa-microphone" />
                        : <i class="fas fa-square" />
                }
            </RecordButton>
        </RecordButtonWrapper>
    )

    return (
        <div className="App">
            <Router>
                <Page />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {
                    showRecordButton
                        ? recordButton
                        : null
                }
                {/* Tricky way to insert onClick action to ChatWidget. */}
                {/* Sorry in advance for any pains this could have caused */}
                <OnClickOverlay onClick={handleChatWidgetClick} />
                <AudioReactRecorder state={recordState} onStop={onRecordStop} />
                {
                    Cookies.get('jwt')
                        ? (
                            <Widget
                                title="Partz"
                                subtitle=":)"
                                senderPlaceHolder="Type something..."
                                handleNewUserMessage={handleSendMessage}
                            />
                        )
                        : null
                }
            </Router>
        </div>
    );
}

export default App;
