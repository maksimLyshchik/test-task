import React, { useCallback, useState } from 'react';
import { TasksFilter } from './TasksFilter/TasksFilter';
import { Button } from '../../common/modules/Button/Button';
import { Icon } from '../../common/modules/Icons/Icons';
import s from './SideBarLeft.module.css';

export const SideBarLeft = () => {
  const [sideBarPosition, setSideBarPosition] = useState(s.collapsed);
  const typeIcons = sideBarPosition === s.collapsed ? 'arrowRight' : 'arrowLeft';

  const handleSideBarPosition = useCallback(() => {
    const changeSideBarPosition = sideBarPosition === s.collapsed ? s.expanded : s.collapsed;

    setSideBarPosition(changeSideBarPosition);
  }, [sideBarPosition]);

  return (
    <div className={`${s.sideBar} ${sideBarPosition}`} >
      <Button color='transparent' className={s.sideBar__button_expand} onClick={handleSideBarPosition} >
        <Icon type={typeIcons} width='20px' height='20px'/>
      </Button>
      <TasksFilter />
    </div>
  );
};
