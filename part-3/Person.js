const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p><b>Name: </b> {name.length > 8 ? name.slice(0,6) : name}</p>
            {age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}
            <ul>
                {hobbies.map(hobby => <li>hobby</li>)}
            </ul>
        </div>
    )
}