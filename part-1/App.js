const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jeff" />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));