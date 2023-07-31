import '../styles/ListItem.css';
import see from '../assets/icons/eye.png';


function ListItem() {
    return (    
            <li className='listitem'>
                <h3>Item de liste: titre</h3>
                <p>Item de liste: contenu</p>
                <img src={see}></img>
            </li>
    );
   
}
export default ListItem;