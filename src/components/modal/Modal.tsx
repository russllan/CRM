import scss from './Modal.module.scss';

interface PropsType {
    children: React.ReactNode;
    isActive: boolean;
}

const Modal: React.FC<PropsType> = ({ children, isActive }) => {
  return (
    <div className={isActive ? scss.modalActive : scss.Modal}>
        <div className={scss.wrapper} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal