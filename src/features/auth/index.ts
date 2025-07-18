import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
  terms: boolean;
  password: string;
}

export interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

const storedUser =
  typeof window !== "undefined"
    ? localStorage.getItem("user")
    : null;

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  error: "",
  loading: false,
}

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const usersJSON = localStorage.getItem("users");
    if (!usersJSON) return rejectWithValue("Nenhum usuário registrado.");

    const users = JSON.parse(usersJSON) as User[];
    const found = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!found) {
      return rejectWithValue("E-mail ou senha inválidos.");
    }

    localStorage.setItem("user", JSON.stringify(found));
    return found;
  } catch {
    return rejectWithValue("Erro ao processar login.");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = "";
      state.loading = false;
      localStorage.removeItem("user")
    },

    loadFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            state.user = user;
          } catch {
            localStorage.removeItem("user");
            state.user = null;
          }
        } else {
          state.user = null;
        }
      }
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Erro desconhecido.";
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const { logout, loadFromLocalStorage } = authSlice.actions;

export default authSlice.reducer;
