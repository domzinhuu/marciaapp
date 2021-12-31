export const getMonthName = (monthNumber) => {
  const monthList = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return monthList[monthNumber];
};

export const formatToMoney = (v) => {
  if (!v) {
    v = "";
  }
  v = v + "";

  v = v.replace(/\D/g, "");

  if (v.length === 3) {
    v = v.replace(/(\d{1})(\d{2})/, "$1,$2");
  } else if (v.length === 4) {
    v = v.replace(/(\d{2})(\d{2})/, "$1,$2");
  } else if (v.length === 5) {
    v = v.replace(/(\d{3})(\d{2})/, "$1,$2");
  } else if (v.length === 6) {
    v = v.replace(/(\d{1})(\d{3})(\d{2})/, "$1.$2,$3");
  } else if (v.length === 7) {
    v = v.replace(/(\d{2})(\d{3})(\d{2})/, "$1.$2,$3");
  } else if (v.length === 8) {
    v = v.replace(/(\d{3})(\d{3})(\d{2})/, "$1.$2,$3");
  } else if (v.length === 9) {
    v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
  } else if (v.length === 10) {
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
  } else if (v.length === 11) {
    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
  } else if (v.length === 12) {
    v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4,$5");
  } else {
    v = v.replace(/(\d{10,})(\d{2})/, "$1.$2");
  }

  return v;
};
