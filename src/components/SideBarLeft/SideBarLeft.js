import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TasksFilter } from './TasksFilter/TasksFilter';
import { Icon } from '../../common/modules/Icons/Icons';
import { OUTLINE } from '../../common/constants/constantsColorButton/constantsColorButton';
import { setVisibledSidebar } from '../../store/componentsSettings/actionSettings';
import { selectSettings } from '../../store/componentsSettings/selectorcomponentsSettings';
import { StyledSideBarButton, StyledWrapperSideBar } from './StyledSideBarLeft';

export const SideBarLeft = () => {
  const dispatch = useDispatch();
  const { isVisibledSidebar } = useSelector(selectSettings);
  const isVisibled = isVisibledSidebar === 'expanded';
  const typeIcons = isVisibled ? 'arrowDown' : 'arrowUp';

  const handleSideBarPosition = useCallback(() => {
    const isChangeVisibled = isVisibled ? 'collapsed' : 'expanded';

    dispatch(setVisibledSidebar({ isVisibledSidebar: isChangeVisibled }));
  }, [dispatch, isVisibled]);

  return (
    <StyledWrapperSideBar isVisibled={isVisibled}>
      <StyledSideBarButton
        color={OUTLINE}
        onClick={handleSideBarPosition}

      >
        <Icon
          type={typeIcons}
          width='20px'
          height='20px'
        />
        {isVisibled && <span>Filter</span>}
      </StyledSideBarButton>
      <TasksFilter />
    </StyledWrapperSideBar>
  );
};
