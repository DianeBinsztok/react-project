import '../../styles/NewApplication.css';
import React from 'react';


function CityInput() {
    return (
        <div className="new-application_input-row">
        <label htmlFor="city">Ville : </label>
        <input type="text" name="city" />
        </div>
    );
}
export default CityInput