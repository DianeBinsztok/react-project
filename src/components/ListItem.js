import '../styles/ListItem.css';
import see from '../assets/icons/eye.png';

// Les props doivent être passées sous forme d'objet
function ListItem({id, title, content}) {
    return (    
            <li key={id} className='listitem'>
                <h3>{title}</h3>
                <p>{content}</p>
                <img src={see} alt="Voir le contenu"/>
            </li>
    );
   
}
export default ListItem;