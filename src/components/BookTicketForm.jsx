import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTicket } from '../redux/actions/ticketAction';

export const BookTicketForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(addTicket(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('contact#')} />
      <select {...register('ticket')}>
        <option value="regular">regular</option>
        <option value="vip">vip</option>
      </select>
      <input type="submit" />
    </form>
  );
};
