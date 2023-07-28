import React from "react";
import plus from "../../assets/icons/plus.svg";
import notification from "../../assets/icons/notification.svg";
import scss from "../adminHeader/AdminHeader.module.scss";
import { AdminModal } from "./adminModal/AdminModal";
import adminPhoto from "../../assets/images/adminPhoto.svg";
import arrowIcon from "../../assets/icons/arrowDown.svg";

export const AdminHeader = () => {
  const [adminModal, setModalAdmin] = React.useState<Boolean>(false);

  const ModalHandler = () => {
    setModalAdmin(!adminModal);
  };
  return (
    <>
      <div className={scss.contayner}>
        <div>
          <span className={scss.dashboard}>Dashboard</span>
        </div>
        <div className={scss.wrapper}>
          <div>
          <input
            className={scss.inputSearch}
            placeholder="Поиск по сайту"
            type="search"
          />
          </div>
        
          <div >
            <img className={scss.plus} src={plus} alt="plus" />
          </div>
          <div>
            <img  className={scss.notification} src={notification} alt="notification" />
          </div>
          <div className={scss.modal} onClick={ModalHandler}>
            <img src={adminPhoto} alt="adminPhoto" />
            <div>
              <span className={scss.admin}>Кайрат Бектов</span>
              <br />
              <span> Администратор</span>
            </div>
            <img className={scss.arrow} src={arrowIcon} alt="arrowIcon" />
          </div>
          {adminModal ? (
            <AdminModal>
              <div>fdgdfggd</div>
            </AdminModal>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
