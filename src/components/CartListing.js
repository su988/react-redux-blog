import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const CartListing = ({ tickets }) => {
  // const { tickets } = useSelector((state) => state.tickets);

  console.log(tickets);

  return (
    <>
      {tickets?.map((ticket, idx) => (
        <>
          <div>{`TICKET # ${idx + 1}`}</div>
          <ul>
            <li>{`NAME: ${ticket.name}`}</li>
            <li>{`TICKET: ${ticket.ticket}`}</li>
          </ul>
        </>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
});

export default connect(mapStateToProps)(CartListing);
