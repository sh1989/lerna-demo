import React from 'react';
import style from './Notification.css';

const Notification = ({ msg }) => (
  <div className={style.notification}>
    { msg }
  </div>
);

export default Notification;
