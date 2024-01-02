import {useState} from 'react';

function Header({title}) {
    if (title) return <h1>{title}</h1>;
    else return <h1>'Default Title'</h1>;

}

export default function HomePage() {
    const title = `Develop. Preview. Ship. 🚀`;
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes+1)
    }
    return <div>
        <Header title={title}/>
        <ul>
            {names.map((name)=> (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
    </div>;
}
