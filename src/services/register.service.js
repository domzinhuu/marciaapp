import api from "./base.service";
import _ from "lodash";
import { getBearerToken } from "./session.service";

const registerService = {
  loadRegisters: async (user, month, year) => {
    const bearerToken = getBearerToken();
    let config = {
      headers: {
        Authorization: bearerToken,
      },
      params: {
        user,
        month,
        year,
      },
    };

    try {
      const result = await api.get(`/registers`, config);
      const grouped = _.groupBy(result.data, "creditCard.name");

      let registers = Object.keys(grouped).map((key) => {
        const installments = [];

        grouped[key].forEach((item) => {
          const installment = item.installments.find(
            (installment) =>
              installment.paymentMonth === month &&
              installment.paymentYear === year
          );

          if (installment) {
            installment.product = item.productName;
            installment.local = item.local;
            installment.total = item.installmentNumber;
          }
          installments.push(installment);
        });

        return {
          cardName: key,
          value: _.sumBy(installments, "value"),
          payDay: grouped[key][0].creditCard.description,
          installments,
        };
      });

      const totalValue = _.sumBy(registers, "value");
      return {
        registers,
        totalValue,
      };
    } catch (error) {
      throw error.response;
    }
  },
};

export default registerService;
