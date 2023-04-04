import React from "react";
import TicketItem from "../../containers/TicketItem/TicketItem";

const TicketsList = (props) => {
  const { team } = props;

  const teamMemberJSX =
    team &&
    team.map((member) => {
      return (
        <TicketItem key={member.id} name={member.name} role={member.role} />
      );
    });

  return <div className="ticketItem">{teamMemberJSX}</div>;
};

export default TicketsList;
