//סיפרייה אשר מאפשרת לנו לגשת לאלמנטים מהדום זה בעצם מקביל ל
//get element by id
import { RefObject, SyntheticEvent, useRef, useState } from "react";
import MessageModel from "../../../Models/MessageModel";
import chatService from "../../../service/ChatService";
import "./Chat.css";

function Chat(): JSX.Element {

    // State for text box two-way-binding:
    //יצירת משתנה מסוג יוז-סטייט אשר ערכו הולך להשתנות בהמשך
    const [text, setText] = useState<string>("");
    
    //יצירת משתנה מסוג יוז-סטייט אשר ערכו הולך להשתנות בהמשך
    //"" הערך ההתחלתי הוא 
    const [nickName, setNickName] = useState<string>("");

    // Direct DOM access in React: 
    //פה אנו יוצרים משתנה אשר יכול להצביע בצורה ישירה לאובייקט בדום 
    //בדומה מאוד ל getElementById
    //כדי לקשר אובייקט בתוכנית אליו אנו מוסיפים לתג שלו 
    //ref={textBoxRef}
    const textBoxRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(); // In CC we can use createRef and not useRef

    // All messages sent from server:
    //פה אנו יוצרים משתנה מסוג מערך אשר יכיל את כל ההודעות שהתקבלו מהשרת
    const [messages, setMessages] = useState<MessageModel[]>([]);

    // Connect to backend:
    //chatService.connect פה אנו יוצרים פונ' שבתוכה אנו מזמנים את הפונקציה 
    //chatService.connect ושמים לה בתור פרמטר את הפונקציה הנזכרת מטה, כאשר אנו מזמנים את פונ' ה
    //אנו מתחברים לשרת דרכה כך:
    //this.socket = io("http://localhost:3001");
    //ומתחברים לאיבנט עם הבאק אנד כך:
    //this.socket.on("msg-from-server", (msg: MessageModel) => {
    //gotMessageCallback(msg);
    //});
    //ואז את המשתנה עם ההודעה מהשרת אנו מכניסים בתור פרמטר לפונ' הזו שהוכנסה המוזכרת מטה:
    //( (msg: MessageModel) => {
    //    messages.push(msg);

        //setMessages פה אנו יוצרים העתק של המערך ואז שולחים את ההעתק ל
        //מכיוון שאנו רוצים שהערך של המשתנה יתרנדר ובמידה ונישלח לו את המערך המקורי ולא ההעתק 
        //ריאקט לא תרנדר את זה
        //(באג של ריאקט)
     //   const newMessages = [...messages];

        //כדי שיהיה בתוכו גם את ההודעה העדכנית Messages פה אנו משנים את ערך ה
     //   setMessages(newMessages);
    //})

    function connect(): void {
        chatService.connect( (msg: MessageModel) => {
            messages.push(msg);

            //setMessages פה אנו יוצרים העתק של המערך ואז שולחים את ההעתק ל
            //מכיוון שאנו רוצים שהערך של המשתנה יתרנדר ובמידה ונישלח לו את המערך המקורי ולא ההעתק 
            //ריאקט לא תרנדר את זה
            //(באג של ריאקט)
            const newMessages = [...messages];

            //כדי שיהיה בתוכו גם את ההודעה העדכנית Messages פה אנו משנים את ערך ה
            setMessages(newMessages);
        });
    }

    // Disconnect from backend:
    function disconnect(): void {
        chatService.disconnect();
    }

    // Handle two-way-binding change:
    function handleTextChange(args: SyntheticEvent): void {
        const value = (args.target as HTMLInputElement).value;
        setText(value);
    }


    function handleNickNameChange(args: SyntheticEvent): void {
        const value = (args.target as HTMLInputElement).value;
        setNickName(value);
    }

    // Send message to backend:
    function send(): void {
        //פה יש לנו משתנה המכיל אובייקט עם שם והודעה 
        const message = new MessageModel(text, nickName);

        //וכפרמטר שולחים אליה את המשתנה שיצרנו chatService פה אנו מזמנים את הפונ' הזו מה
        //פונקציה זו מקבלת הודעה ושולחת אותה לשרת 
        chatService.send(message);
        //Text פה אנו מאפסים את ערך המשתנה 
        setText("");

        //בגלל שיצרנו אובייקט שמצביע על אובייקט ישיר בדום אנו יכולים מיפה לבצע עליו פקודות
        //שאפשר לבצע רק על תגיות שבדום
        textBoxRef.current.focus(); // <-- accessing focus function directly to text box DOM object.
    }

    return (
        <div className="Chat">
            <p>Please write us a message and a representative will get back to you soon</p>
            {/*שהיא בעצם לוקחת את הערך שהזין handleNickNameChange פה ברגע שיהיה שינוי בהקלדה תופעל פונ' ה*/}
            {/*NickName המשתמש ומכניסה אותו לערך המשתנה */}
            {/*nickName של האינפוט הזה יהיה שווה לערך ה value ולאחר מכן קובעת שה */}
            {/*value={nickName}*/} <br />

            <button onClick={disconnect}>Disconnect</button>
            <br />

            <input type="text" onChange={handleNickNameChange} value={nickName} placeholder="Nick Name..." />
            <br />


            {/* onChange={handleChange} --> one way from text box to state,
            value={text} --> second way from state back to text box */}
            {/*שהיא בעצם לוקחת את הערך שהזין handleTextChange פה ברגע שיהיה שינוי בהקלדה תופעל פונ' ה*/}
            {/*text המשתמש ומכניסה אותו לערך המשתנה */}
            {/*text של האינפוט הזה יהיה שווה לערך ה value ולאחר מכן קובעת שה */}
            {/*value={text}*/}
            <input type="text" onChange={handleTextChange} value={text} placeholder="Message..." ref={textBoxRef} />
            <br />
            <button onClick={connect}>Connect before sending the message</button> 
            <br />
            <button onClick={send}>Send</button>

            
            <div className="Messages">
                {messages.map((m, index) => <p key={index}>{m.nickName}: {m.text}</p>)}
            </div>

        </div>
    );
}

export default Chat;
