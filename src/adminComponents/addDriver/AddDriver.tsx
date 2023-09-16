import { AdminHeader } from "../adminHeader/AdminHeader";
import styles from "../addCar/AddCar.module.scss";
import userimg from "../../assets/icons/user.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setName,
  setLastName,
  setSurName,
  setPassword,
  setPhone,
  setEmail,
  FormState,
  clearForm,
  initialState,
  setLogin,
  setSelectedCar,
} from "../../store/slices/addDriver.Slice";
import axios from "axios";

export const AddDriver = () => {
  const [user, setUser] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialState);

  const dispatch = useDispatch();
  const userChange = () => {
    setUser((prevState) => !prevState);
  };

  // const { selectedCar, carOptions } = useSelector((state) => state.form);

  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setFormData({ ...formData, selectedCar: selectedValue });
  };
console.log(formData.selectedCar)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Применяем обновление Redux-состояния с использованием имени поля
    switch (name) {
      case "name":
        dispatch(setName(value));
        break;
      case "surName":
        dispatch(setSurName(value));
        break;
      case "lastName":
        dispatch(setLastName(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      case "login":
        dispatch(setLogin(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "phone":
        dispatch(setPhone(value));
        break;

      case "selectedCar":
      dispatch(setSelectedCar(formData.selectedCar));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendToBackend();
  };

  const handleSendToBackend = async () => {
    try {
      const response = await axios.post(
        "https://644ab451a8370fb321560b1c.mockapi.io/drivers",
        formData
      );

      if (response.status === 200) {
        console.log("Данные успешно отправлены на сервер:", response.data);
        dispatch(clearForm());
      }
    } catch (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <form onSubmit={handleSubmit}>
        <div>
          <p>Административная панель</p>
          <h2 className={styles.platinumPark}>Добавить Водителя</h2>
        </div>
        <div>
          {user ? null : (
            <label htmlFor="100х100 фотография">
              100х100 фотография
              <br />
              Форматы: png, jpg, jpeg
            </label>
          )}
          {user ? (
            <input type="file" accept="image/*" multiple />
          ) : (
            <button onClick={userChange} className={styles.userBtn}>
              <img src={userimg} alt="jj" />
            </button>
          )}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.first}>
            <div>
              <label htmlFor="name"> name</label>
              <input
                value={formData.name}
                onChange={handleInputChange}
                placeholder="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="surname"> отчество</label>
              <input
                value={formData.surName}
                onChange={handleInputChange}
                type="отчество"
                placeholder="отчество"
                name="surName"
              />
            </div>
            <div>
              <label htmlFor="пароль">пароль (одноразовый)</label>
              <input
                type="text"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="пароль"
                id="пароль"
                name="password"
              />
            </div>
            <div>
              <label htmlFor="">phone number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="phone"
                id="phone"
                name="phone"
              />
            </div>
          </div>

          <div className={styles.second}>
            <div>
              <label htmlFor="фамилия">фамилия</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="фамилия"
                id="фамилия"
                name="lastName"
              />
            </div>

            <div>
              <label htmlFor="логин">логин</label>
              <input
                value={formData.login}
                type="text"
                placeholder="логин"
                id="логин"
                name="login"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email"
                id="email"
                name="email"
              />
            </div>
          </div>
        </div>

        <div>
          <select
            onChange={handleCarChange}
            value={formData.selectedCar}
            name="selectedCar"
          >
            <option value="">Выберите машину</option>
            {formData.carOptions.map((car, index) => (
              <option key={index}>{car}</option>
            ))}
          </select>
          

          <button className={styles.addBtn} type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
};
