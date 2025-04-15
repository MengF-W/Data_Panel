export class Device {
    constructor(
        public id: any,
        public name: any,
        public deviceType: any,
        public messageContent: any,
        public timeStamp: String
    ) {
        this.id = id;
        this.name = name;
        this.deviceType = deviceType;
        this.messageContent = messageContent;
        this.timeStamp = timeStamp;
    }

}
