import React from 'react';
import s from './BlockTasks.module.css';
import { Input } from '../../common/Input/Input';

export const BlockTask = ({value, time}) => (
  <div className={s.blockTask}>
    <Input value={value} disabled/>
    <p>Time add:{time}</p>
  </div>
);
