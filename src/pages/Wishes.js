import { useState } from 'react';
import './Wishes.css';

export default function Wishes() {
    const [wishes, setWishes] = useState([]);
    const [input, setInput] = useState('');

    const handleAddWish = () => {
        if (input.trim() === '') return;
        setWishes([...wishes, input.trim()]);
        setInput('');
    };

    return (
        <section className="wishes">
            <h2>Wedding Wishes</h2>
            <div className="wishes-input">
                <input
                    type="text"
                    placeholder="Write your wish here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAddWish}>Send</button>
            </div>
            <ul className="wishes-list">
                {wishes.map((wish, idx) => (
                    <li key={idx}>{wish}</li>
                ))}
            </ul>
        </section>
    );
}
