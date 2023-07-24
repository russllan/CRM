import scss from "./DriverCard.module.scss";

const DriverCard: React.FC = () => {
  return (
    <div className={scss.DriverCard}>
      <div className={scss.wrapper}>
        <div>
          <img src="/images/smallCar.svg" alt="Car" />
        </div>
        <div>
          <span>KIA 250c</span> <br />
          <span className={scss.date}>17 июля, 12:00-2 авг., 12:00</span>
        </div>
        <div className={scss.bell}>
          <img src="/images/bell.svg" alt="Bell" />
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
