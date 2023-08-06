import '../../styles/NewApplication.css';
import React from 'react';


function CompanyInput() {
    return (
        <div className="new-application_input-row">
        <label htmlFor="company">Entreprise :</label>
        <input type="text" name="company" />
        </div>
    );
}
export default CompanyInput