import React from 'react';
import ContractInput from './applicationInputs/ContractInput';
import TitleInput from './applicationInputs/TitleInput';
import CompanyInput from './applicationInputs/CompanyInput';
import CityInput from './applicationInputs/CityInput';
import StatusInput from './applicationInputs/StatusInput';
import CoverLetterInput from './applicationInputs/CoverLetterInput';
import NotesInput from './applicationInputs/NotesInput';



import '../styles/NewApplication.css';

function NewApplication() {
    return (
        <form id="new-application">

        <ContractInput/>
        <TitleInput/>
        <CompanyInput/>
        <CityInput/>
        <StatusInput/>
        <CoverLetterInput/>
        <NotesInput/>

        </form>
    );
}
export default NewApplication