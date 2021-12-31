import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { RegisterContext } from "../../context/register.context";
import { formatToMoney } from "../../utils/functions";

const FilterBox = () => {
  const { month, setMonth, totalValue } = useContext(RegisterContext);
  return (
    <Box
      sx={{
        pt: 2,
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "4px solid #f57c00",
        }}
      >
        <Typography variant="body2" sx={{ pb: 1 }}>
          Seu valor para:
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Mês</InputLabel>
          <Select
            autoWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <MenuItem value="Janeiro">Janeiro</MenuItem>
            <MenuItem value="Fevereiro">Fevereiro</MenuItem>
            <MenuItem value="Março">Março</MenuItem>
            <MenuItem value="Abril">Abril</MenuItem>
            <MenuItem value="Maio">Maio</MenuItem>
            <MenuItem value="Junho">Junho</MenuItem>
            <MenuItem value="Julho">Julho</MenuItem>
            <MenuItem value="Agosto">Agosto</MenuItem>
            <MenuItem value="Setembro">Setembro</MenuItem>
            <MenuItem value="Outubro">Outubro</MenuItem>
            <MenuItem value="Novembro">Novembro</MenuItem>
            <MenuItem value="Dezembro">Dezembro</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "4px solid #388e3c",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 18, fontWeight: "bold" }}>
          R$ {formatToMoney(totalValue)}
        </Typography>
        <Typography variant="body2">Valor total</Typography>
      </Paper>
    </Box>
  );
};

export default FilterBox;
