import { io, Socket } from "socket.io-client";
import MessageModel from "../Models/MessageModel";

class ChatService {

    private socket: Socket;

    public connect(gotMessageCallback: Function): void {
        //  Connect to backend:
        this.socket = io("http://localhost:3001");
        //ופה אנו מתחברים לאיבנט אשר מקבל הודעות מהשרת
        //gotMessageCallback איברנט זה מקבל הודעות מהשרת ושם את ההודעה מהשרת בתור פרמטר לפונקציה 
        this.socket.on("msg-from-server", (msg: MessageModel) => {

            // If we have a global state: 
            // Update the global state (Redux) with this message.
            // Redux will then notify all subscribers.

            // If we don't have a global state - getting a callback as an argument
            // and calling that callback:

            gotMessageCallback(msg);
        });
    }


    //פונקציה אשר מנתקת את הקשר
    public disconnect(): void {
        this.socket.disconnect();
    }

    //פונ' אשר שולחת הודעה לשרת
    public send(msg: MessageModel): void {
        this.socket.emit("msg-from-client", msg);
    }

}

const chatService = new ChatService();

export default chatService;