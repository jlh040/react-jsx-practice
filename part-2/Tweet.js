let today = new Date();
let todayReadable = today.toDateString();

const Tweet = ({username="N/A", name="N/A", date=todayReadable, message="N/A"}) => {
    return (
        <div>
            <p><b><u>Tweet</u></b></p>
            <p><b>Username: </b>{username}</p>
            <p><b>Name: </b>{name}</p>
            <p><b>Message: </b>{message}</p>
            <p><b>Date: </b>{date}</p>
        </div>
    )
};