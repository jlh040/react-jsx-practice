const App = () => {
    return (
        <div>
            <Tweet 
                username="dog_guy22" 
                name="Mark" 
                date="07/04/2021" 
                message="This is my first tweet" />
            <hr />
            <Tweet 
                username="hatperson54" 
                name="Dirk" 
                date="08/03/1999" 
                message="I'm going to the mall today, hopefully I can find the shoes that I want to buy,
                otherwise I will be very angry" />
            <hr />
            <Tweet 
                username="anon786" 
                name="Jeff" 
                date="12/21/2016" 
                message="Hey, who's going to the party tonight?" />
            <hr />
            <Tweet 
                username="big_bob99" 
                name="Bob"
                message="Tonight, I shall chop wood" />
            <hr />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));