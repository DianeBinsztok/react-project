import '../../styles/NewApplication.css';
import React from 'react';


function TitleInput() {
    return (
        <div className="new-application_input-row">
        <label htmlFor="title">Titre de l'annonce :</label>
        <input type="text" name="title" />
        </div>
    );
}
export default TitleInput