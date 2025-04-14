import React from 'react';

const Notes = props => props.data.map(note => <div>{note.text} </div>);

export default Notes;
