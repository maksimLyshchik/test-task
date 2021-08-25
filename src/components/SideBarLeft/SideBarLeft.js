import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TasksFilter } from './TasksFilter/TasksFilter';
import { Button } from '../../common/modules/Button/Button';
import { Icon } from '../../common/modules/Icons/Icons';
import { TRANSPARENT } from '../../common/constants/constantsColorButton/constantsColorButton';
import { setVisibledSidebar } from '../../store/componentsSettings/actionSettings';
import { selectSettings } from '../../store/componentsSettings/selectorcomponentsSettings';
import s from './SideBarLeft.module.css';

export const SideBarLeft = () => {
  const dispatch = useDispatch();
  const { isVisibledSidebar } = useSelector(selectSettings);
  const isVisibled = isVisibledSidebar === 'collapsed';
  const typeIcons = isVisibled ? 'arrowDown' : 'arrowUp';
  const sideBarPosition = isVisibled ? s.collapsed : s.expanded;

  const handleSideBarPosition = useCallback(() => {
    const isChangeVisibled = isVisibled ? 'expanded' : 'collapsed';

    dispatch(setVisibledSidebar({ isVisibledSidebar: isChangeVisibled }));
  }, [dispatch, isVisibled]);

  return (
    <div className={`${s.sideBar} ${sideBarPosition}`} >
      <Button color={TRANSPARENT} className={s.sideBar__button} onClick={handleSideBarPosition} >
        <Icon type={typeIcons} width='20px' height='20px'/>
        {isVisibled && <span>Filter</span>}
      </Button>
      <TasksFilter />
    </div>
  );
};
