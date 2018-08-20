export default class Message{
    constructor(id,msgUser,text,msgType){
        this._id = id;
        this.msgUser = msgUser;
        this.text = text;
        this.msgType = msgType;
    }
}


const msgType = {
    NORMAL : 1,
    SYSTEM : 2
}

export {msgType}