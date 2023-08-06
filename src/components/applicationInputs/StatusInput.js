import '../../styles/NewApplication.css';
import React from 'react';


function StatusInput() {
    return (
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
    );
}
export default StatusInput