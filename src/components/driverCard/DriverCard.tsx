import scss from "./DriverCard.module.scss";

interface PropsType {
  img?: string,
  name: string,
  date: string
}

const DriverCard: React.FC<PropsType> = ({ img, name, date }) => {
  return (
    <div className={scss.DriverCard}>
      <div className={scss.wrapper}>
        <div>
          <img className={scss.img} src={img === "" ? "/images/smallCar.svg" : img} alt={name} />
        </div>
        <div>
          <span>{name}</span> <br />
          <span className={scss.date}>{date}</span>
        </div>
        <div className={scss.bell}>
          <img src="/images/bell.svg" alt="Bell" />
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
