function ChatBot() {
    const [customanswer, setCustomAnswer ] = useState('');
    const [userQuestion, setUserQuestion ] = useState('');
    const userID='react-chatbot-kit-user-chat-message'; //Class der Bot Nachricht (div)
    const botID='react-chatbot-kit-chat-bot-message';// Class vom User (div)




    function myDiv(divID, divValue){
        const chatBox = document.querySelector('#chatbox');//chatbox id div setzen
        const questionDiv= document.createElement('div'); //div element erstellen
        questionDiv.className=divID; //id
        questionDiv.innerHTML=divValue; //text
        chatBox.appendChild(questionDiv); //neues div element erstellen
    }


    function clearInputField() {
        document.getElementById("messagefield").value = "";
    }



    const handleClick = () => {
 //mögliche antworten auf die Fragen
        answerQuestion(userQuestion, [
            {id: 'doc1', text: 'Es gibt sehr viele Orte wo du Bücher hinspenden kannst. Welches Genre sind die Bücher?'},
            {id: 'doc2', text: 'Darüber habe ich leider keine Kenntnisse. Kann ich dir sonst noch helfen?'},
            {id: 'doc3', text: 'Wenn du Bücher für Kinder kannst du da hin schicken: Kinderorganisationen:'},
            {id: 'doc4', text: 'Alte Klamotten kannst du hier her spenden: '},
            {id: 'doc5', text: 'Du kannst alle möglichen Gegenstände spenden. Zum Beispiel kannst du: Bücher,DVDs,Klamotten spenden. Was möchtest du gerne spenden?'},
            {id: 'doc6', text: 'Du kannst auch deine Bücher von einem abholservice abholen lassen.'},
        ]).then(answers => {
            setCustomAnswer(answers.answers[0].answer); //setzen der Bot Nachricht
            myDiv(getUserID(), userQuestion); //vom User die id für das div holen und in das Div den text vom input feld rein tun
            myDiv(getBotID(), answers.answers[0].answer); //vom Bot die id für das div holen + texxt aus antwortmöglichkeiten
        })
        clearInputField();

    }
    const handleChange = event => {
        setUserQuestion(event.target.value); //text von user nachricht setzen
        document.getElementById('messageeingabe').value=event.target.value;
    };

    function getUserID(){
        return userID; //die ID zurückgeben für das div user
    }
    function getBotID(){
        return botID; //die ID zurückgeben für das div bot
    }




    return (

        <div>
            <div id="chatbox" >
                <div className="kontaktname"> <p>Chatbot </p><div> <img  src={chatbotbild} alt="chatbotbild" height={60} width={60} /></div></div>
                <div className={getBotID()}> Hallo, wie kann ich dir behilflich sein? </div>
            </div>
            <input className="inputfield"
                type="text"
                id="messagefield"
                name="message"
                onChange={handleChange}
            />
            <button onClick={handleClick}><AiOutlineSend className="message-send" size={20} color="#00158B"/></button>
        </div>
    );

}

export default ChatBot;
