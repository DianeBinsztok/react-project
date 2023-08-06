import '../styles/ApplicationListItem.css';
import see from '../assets/icons/eye.png';
import edit from '../assets/icons/edit.png';


// Les props doivent être passées sous forme d'objet
function ApplicationListItem({id, title, contract, company, city, status}) {
    return (    
            <li key={id} className='listitem'>
                <p>{contract}</p>
                <h3>{title}</h3>
                <p>{company}</p>
                <p>{city}</p>
                <p>{status}</p>
                <div className="listitem-icons">
                <img src={see} alt="Voir le contenu"/>
                <img src={edit} alt="Modifier"/>
                </div>
            </li>
    );
   
}
export default ApplicationListItem;