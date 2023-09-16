import { useSelector } from 'react-redux';
import { FormState } from './slices/addDriver.Slice';

const useAllData = () => {
  return useSelector((state: FormState) => ({
    name: state.name,
    surName: state.surName,
    lastName: state.lastName,
    password: state.password,
    login: state.login,
    email: state.email,
    phone: state.phone,
    carOptions: state.carOptions,
  }));
};

export default useAllData;
