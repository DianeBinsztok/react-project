import '../styles/Main.css';
import List from './List'
import NewApplication from './NewApplication'



function Main() {
    return (
        <main>
            <h2>Mes candidatures</h2>
            <List />

            <h2>Nouvelle candidature</h2>
            <NewApplication/>
        </main>
    );
}
export default Main