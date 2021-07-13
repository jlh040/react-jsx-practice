const App = () => {
    return (
        <div>
            <Person 
                name="Bob" 
                age={17} 
                hobbies={['Biking, Going to the mall, Swimming with friends']} />
            <Person 
                name="Michaelangelo" 
                age={35} 
                hobbies={['Buying lucrative and expensive furniture']} />
            <Person 
                name="John" 
                age={18} 
                hobbies={['Taking care of my grandma', 'Having lunch with family', 'Being a great person']} />
        </div>
    )
};