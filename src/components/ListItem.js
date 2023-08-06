import '../styles/ListItem.css';
import see from '../assets/icons/eye.png';
import edit from '../assets/icons/edit.png';


// Les props doivent être passées sous forme d'objet
function ListItem({id, title, content}) {
    return (    
            <li key={id} className='listitem'>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="listitem-icons">
                <img src={see} alt="Voir le contenu"/>
                <img src={edit} alt="Modifier"/>
                </div>
            </li>
    );
   
}
export default ListItem;