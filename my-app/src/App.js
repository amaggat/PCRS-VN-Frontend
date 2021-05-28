import './App.css';
import Page from "./Pages/Page";
import { Widget, addResponseMessage, addLinkSnippet } from 'react-chat-widget-mic';
import 'react-chat-widget/lib/styles.css'
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
import { sendMessage } from './Client/AccountService';
import { Chat } from './Components/Chat';

function App() {
    const handleMessage = async (newMessage) => {
        const result = await sendMessage(newMessage);
        if (result.data) {
            addResponseMessage(result.data.response);
            const productList = result.data.responseList;
            productList.forEach(product => {
                addLinkSnippet({
                    title: product.key || 'No name',
                    link: product.value || 'nolink.com',
                    target: '_blank'
                })
            });
        }
    }
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
                    Cookies.get('jwt')
                        ? (
                            <Chat/>
                        )
                        : null
                }
            </Router>
        </div>
    );
}

export default App;
