import React, { useState } from 'react';
import Notes from './Notes';
import { produce } from 'immer';

const initialData = [{ text: 'Hey' }, { text: 'There' }];
const App_Notes = () => {
    const [data, setData] = useState(initialData);

    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
            const nextState = produce(data, draftState => {
                draftState.push({ text });
            });
            document.querySelector('#noteinput').value = '';
            setData(nextState);
        }
    };
    return (
        <>
            <input id="noteinput" style={{ width: '80%' }} type="text"
                placeholder="Enter a new note" />
            <button onClick={handleClick}>Add note</button>
            <Notes data={data} />
        </>
    );
};
export default App_Notes;