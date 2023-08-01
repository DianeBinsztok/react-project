import '../styles/List.css';
import ListItem from './ListItem';
import '../styles/ListItem.css';
import see from '../assets/icons/eye.png';

// Chaque item doit avoir une clé (id) pour faciliter
const listArray = [

    {id:0, title: "Titre du premier item de liste", content:"Ceci est le contenu du premier item"},
    {id:1, title: "Titre du second item de liste", content:"Contenu du second item"},
    {id:2, title: "Troisième titre d'item de liste", content:"Ceci est le contenu du troisième item"},
];

function List() {

    //La fonction fléchée retourne implicitement l'expression: pas besoin de "return"
    const list = listArray.map((item, index)=>
        <ListItem key={item.id} title= {item.title} content = {item.content}/>
    );

    return (    
        <ul>
            {list}
        </ul> 
    );
   
}
export default List;