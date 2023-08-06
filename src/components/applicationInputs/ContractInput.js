import '../../styles/NewApplication.css';
import React from 'react';


function ContractInput() {
    return (
        <div className="new-application_input-row">
        <label htmlFor="contract">Contrat :</label>
            <select name="contract" id="contract">
                <option value="cdi">CDI</option>
                <option value="cdd">CDD</option>
                <option value="stage">Stage</option>
                <option value="apprentissage">Apprentissage</option>
            </select>
        </div>
    );
}
export default ContractInput