import '../styles/ApplicationListItem.css';


// Les props doivent être passées sous forme d'objet
function ApplicationDetail({id, title, contract, company, city, status, content, notes, coverLetter}) {
    return (    
            <div>
                <h1>Offre n° {id}</h1>
                <h2>{title}</h2>

                <div>
                <h3>Informations</h3>
                <p>Contrat : {contract}</p>
                <p>Entreprise : {company}</p>
                <p>Localisation : {city}</p>
                <p>Statut : {status}</p>
                </div>

                <div>
                <h3>Historique</h3>
                <p>Pas d'historique pour le moment</p>
                </div>

                <div>
                <h3>L'offre</h3>
                <p>{content}</p>
                </div>

                <div>
                <h3>Mes notes</h3>
                <p>{notes}</p>
                </div>

                <div>
                <h3>Ma lettre de motivation:</h3>
                <p>{coverLetter}</p>
                </div>

            </div>
    );
   
}
export default ApplicationDetail;