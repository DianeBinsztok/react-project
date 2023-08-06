import '../styles/Main.css';
import ApplicationDetail from './ApplicationDetail';
import List from './List'
import NewApplication from './NewApplication'



function Main() {
    return (
        <main>
            <h1>Tableau de bord</h1>
            <h2>Mes candidatures</h2>
            <List />

            <h2>Nouvelle candidature</h2>
            <NewApplication/>

            <h2>Détail d'une candidature</h2>
            <ApplicationDetail/>
        </main>
    );
}
export default Main