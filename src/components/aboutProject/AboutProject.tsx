import scss from "./AboutProject.module.scss";

const AboutProject: React.FC = () => {
  return (
    <div className={scss.AboutProject}>
      <div className={scss.wrapper}>
        <h1>O проекте Platinum Park.</h1>
        <span>
          Другое название — "универсальный генератор речей". По легенде, всякие
          депутаты и руководители в СССР <br /> использовали в своих
          выступлениях заготовленный набор совмещающихся между собой
          словосочетаний, что <br />
          позволяло нести псевдоумную ахинею часами. Что-то вроде дорвеев для
          политсобраний. <br /> Кстати, "универсальный код речей" насчитывает
          только 40 таких словосочетаний, тогда как в нашем случае — их <br />
          уже 192. Из них наш генератор рыбатекста способен составить примерно 5
          287 500 уникальных предложений- <br />
          комбинаций (в оригинале же только 10 000). Просто вдумайтесь: около
          миллиарда символов случайного текста.
        </span>
      </div>
    </div>
  );
};

export default AboutProject;
