import React from "react";
import { useState } from "react";

const TicketItem = (props) => {
  const { name, role } = props;
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
      <h2>{name}</h2>
      <h2>{role}</h2>
      <p>Tickets: {tickets}</p>
      <button onClick={handleIncrement}>+1 Ticket</button>
      <button onClick={handleDecrement}>-1 Ticket</button>
    </div>
  );
};

export default TicketItem;
