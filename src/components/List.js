import '../styles/List.css';
import Application from './ApplicationListItem';

// Chaque item doit avoir une clé (id)
const listArray = [

    {id:0, title: "Titre du premier item de liste", content:"Ceci est le contenu du premier item", contract:"CDI", company:"The Company", city:"Kathmandu", status:"Candidater"},
    {id:1, title: "Titre du second item de liste", content:"Contenu du second item", contract:"CDD", company:"Example INC", city:"Honolulu", status:"Candidature en cours"},
    {id:2, title: "Troisième titre d'item de liste", content:"Ceci est le contenu du troisième item", contract:"CDD", company:"Sample & Co", city:"Johannesburg", status:"À relancer"},
];

function List() {

    //La fonction fléchée retourne implicitement l'expression: pas besoin de "return"
    const list = listArray.map((item, index)=>
        <Application key={item.id} title= {item.title} contract= {item.contract} company = {item.company} city= {item.city} status = {item.status}/>
    );

    return (    
        <ul>
            {list}
        </ul> 
    );
   
}
export default List;