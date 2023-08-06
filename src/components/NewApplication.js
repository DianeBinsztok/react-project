import '../styles/NewApplication.css';
import React from 'react';


function NewApplication() {
    return (
        <form id="new-application">

        <div className="new-application_input-row">
        <label htmlFor="contract">Contrat :</label>
            <select name="contract" id="contract">
                <option value="cdi">CDI</option>
                <option value="cdd">CDD</option>
                <option value="stage">Stage</option>
                <option value="apprentissage">Apprentissage</option>
            </select>
        </div>
        
        <div className="new-application_input-row">
        <label htmlFor="title">Titre de l'annonce :</label>
        <input type="text" name="title" />
        </div>

        <div className="new-application_input-row">
        <label htmlFor="company">Entreprise :</label>
        <input type="text" name="company" />
        </div>

        <div className="new-application_input-row">
        <label htmlFor="city">Ville : </label>
        <input type="text" name="city" />
        </div>

        <div className="new-application_input-row">
        <label htmlFor="status">Etat :</label>
            <select name="status" id="status">
                <option value="to-apply">Candidature à faire</option>
                <option value="pending">Candidature en cours</option>
                <option value="to-followup">À relancer</option>
                <option value="pending-interview">Entretient programmé</option>
                <option value="archived">Archivé</option>
            </select>
        </div>

        <div className="new-application_input-column">
        <label htmlFor="notes">Notes personnelles : </label>
        <textarea name="notes" rows="5" cols="33"></textarea>
        </div>

        <div className="new-application_input-column">
        <label htmlFor="cover-letter">Lettre de motivation : </label>
        <textarea name="cover-letter" rows="5" cols="33"></textarea>
        </div>

        </form>
    );
}
export default NewApplication