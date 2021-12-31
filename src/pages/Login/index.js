import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import authService from "../../services/auth.service";
import {
  getRememberMe,
  isRemember,
  saveSession,
  setRememberMe,
} from "../../services/session.service";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRemember] = React.useState(false);
  const [hasError, setError] = React.useState(false);

  React.useEffect(() => {
    if (isRemember()) {
      const data = getRememberMe();
      setInitialData(data);
    }
  }, []);

  const setInitialData = (data) => {
    setUserName(data.username.toLowerCase());
    setPassword(data.password);
    setRemember(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      username: username,
      password: password,
    };

    try {
      const response = await authService.login(
        credentials.username,
        credentials.password
      );

      const hasRemember = rememberMe;
      setRememberMe(hasRemember, credentials.username, credentials.password);
      saveSession(response.data);
      setError(false);
      navigate("/home");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Marcia Express Web
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            autoComplete="off"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRemember(e.target.checked)}
                name="rememberMe"
                value="remember"
                color="primary"
              />
            }
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            fullWidth
            disabled={!username || !password}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Conectar
          </Button>
        </Box>
        {hasError && (
          <Typography>
            <Box sx={{ color: "error.main" }}>Login ou senha inválido</Box>
          </Typography>
        )}
      </Box>
    </Container>
  );
}
