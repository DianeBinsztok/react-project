import '../../styles/NewApplication.css';
import React from 'react';


function NotesInput() {
    return (
        <div className="new-application_input-column">
        <label htmlFor="notes">Notes personnelles : </label>
        <textarea name="notes" rows="5" cols="33"></textarea>
        </div>
    );
}
export default NotesInput