/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import LoggedUser from "../../components/LoggedUser";
import { getCompleteName, isLogged } from "../../services/session.service";
import CardAccordion from "../../components/CardAccordion";
import FilterBox from "../../components/FilterBox";
import { RegisterContext } from "../../context/register.context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [completName] = useState(getCompleteName());
  const { month, registers, getRegister } = useContext(RegisterContext);

  const navigate = useNavigate();

  useEffect(() => {
    const logged = isLogged();

    if (!logged) {
      navigate("/");
      return;
    }
    getRegister(month);
  }, []);

  return (
    <Box sx={{ background: "#333", height: "100%" }}>
      <Header />
      <Box sx={{ p: 2 }}>
        <LoggedUser name={completName} />
        <FilterBox />
      </Box>

      <Box sx={{ p: 2 }}>
        {registers.map((register) => (
          <CardAccordion key={register.cardName} register={register} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
