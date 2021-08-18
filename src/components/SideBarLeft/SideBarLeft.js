import React, { useCallback, useState } from 'react';
import { TasksFilter } from './TasksFilter/TasksFilter';
import { Button } from '../../common/modules/Button/Button';
import { Icon } from '../../common/modules/Icons/Icons';
import s from './SideBarLeft.module.css';

export const SideBarLeft = () => {
  const [sideBarPosition, setSideBarPosition] = useState(s.collapsed);
  const typeIcons = sideBarPosition === s.collapsed ? 'arrowDown' : 'arrowUp';

  const handleSideBarPosition = useCallback(() => {
    const isVisebled = sideBarPosition === s.collapsed ? s.expanded : s.collapsed;

    setSideBarPosition(isVisebled);
  }, [sideBarPosition]);

  return (
    <div className={`${s.sideBar} ${sideBarPosition}`} >
      <Button color='transparent' className={s.sideBar__button} onClick={handleSideBarPosition} >
        <Icon type={typeIcons} width='20px' height='20px'/>
        {sideBarPosition === s.collapsed && <span>Filter</span>}
      </Button>
      <TasksFilter />
    </div>
  );
};
