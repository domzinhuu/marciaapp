/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import registerService from "../services/register.service";
import { getUserId } from "../services/session.service";
import { getMonthName } from "../utils/functions";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [registers, setRegisters] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [month, setMonth] = useState(getMonthName(new Date().getMonth()));
  const [userId] = useState(getUserId());
  const navigate = useNavigate();

  const getRegister = async () => {
    try {
      const userId = getUserId();
      const response = await registerService.loadRegisters(
        userId,
        month,
        new Date().getFullYear()
      );
      setTotalValue((response.totalValue / 100).toFixed(2));
      setRegisters(response.registers);
    } catch (error) {
      if (error.status === 403) {
        navigate("/");
      } else {
        throw error;
      }
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        registers,
        setRegisters,
        month,
        setMonth,
        userId,
        totalValue,
        setTotalValue,
        getRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
