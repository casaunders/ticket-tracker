import React from "react";
import TicketItem from "../../containers/TicketItem/TicketItem";
const TicketsList = (props) => {
  const { teamArr } = props;

  const teamMember = teamArr.map((member) => {
    return <TicketItem key={member.id} name={member.name} role={member.role} />;
  });

  return <div>{teamMember}</div>;
};

export default TicketsList;
