import React, { CSSProperties, FC, PropsWithChildren, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: FC<PropsWithChildren<Props>> = ({ children, show, onCloseModal, style, closeButton }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, [])

  if(!show) return null;

  return (
    <CreateMenu onClick={ onCloseModal }>
      <div onClick={ stopPropagation } style={style}>
        { closeButton && <CloseModalButton onClick={ onCloseModal }>&times;</CloseModalButton> }
        { children }
      </div>
    </CreateMenu>
  )
}

Menu.defaultProps = {
  closeButton: true,
}

export default Menu
