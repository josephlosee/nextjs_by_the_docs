import LikeButton from './like-button';

function Header({title}) {
    if (title) return <h1>{title}</h1>;
    else return <h1>'Default Title'</h1>;

}

export default function HomePage() {
    const title = `Develop. Preview. Ship. 🚀`;
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    
    return <div>
        <Header title={title}/>
        <ul>
            {names.map((name)=> (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <LikeButton/>
    </div>;
}
