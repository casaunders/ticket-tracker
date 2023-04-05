import { useState } from "react";

const TicketItem = (props) => {
  const [tickets, setTickets] = useState(0);

  const handleIncrement = () => {
    setTickets(tickets + 1);
  };

  const handleDecrement = () => {
    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  };

  return (
    <div>
      <h3>{props.member.name}</h3>
      <h4>{props.member.role}</h4>
      <p>Tickets: {tickets}</p>
      <button onClick={handleIncrement}>+1 Ticket</button>
      <button onClick={handleDecrement}>-1 Ticket</button>
    </div>
  );
};

export default TicketItem;
