import TicketsList from './components/TicketsList/TicketsList';
import team from './data/team';

const App = () => {
  return (
    <div>
      <h1>Ticket Tracker</h1>
      <TicketsList team={team} />
    </div>
  );
}

export default App;