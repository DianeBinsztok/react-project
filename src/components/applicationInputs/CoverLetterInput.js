import '../../styles/NewApplication.css';
import React from 'react';


function CoverLetterInput() {
    return (
        <div className="new-application_input-column">
        <label htmlFor="cover-letter">Lettre de motivation : </label>
        <textarea name="cover-letter" rows="5" cols="33"></textarea>
        </div>
    );
}
export default CoverLetterInput