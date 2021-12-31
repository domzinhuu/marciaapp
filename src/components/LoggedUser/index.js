import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";

const LoggedUser = ({ name }) => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{ fontSize: 14, typography: "body1" }}
          color="text.secondary"
          gutterBottom
        >
          Bem vindo(a),
        </Box>
        <Box
          sx={{ fontSize: 14, typography: "body2", fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoggedUser;
