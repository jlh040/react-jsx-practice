const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p><b>Name: </b> {name.length > 8 ? name.slice(0,6) : name}</p>
            <h3>{age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <p><b>Hobbies:</b></p>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}
