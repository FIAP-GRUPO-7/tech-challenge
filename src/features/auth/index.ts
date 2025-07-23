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
      state.error = null;
      state.loading = false;

      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const exists = users.some((u: User) => u.email === action.payload.email);

      if(exists) {
        state.error = "Já existe um usuário com esse E-mail."
      } else {
        users.push({
          ...action.payload
        })

        localStorage.setItem("users", JSON.stringify(users))
      }
    },
    updateUser: (state, action) => {
      const updatedUser = { ...state.user, ...action.payload } as User;
      state.user = updatedUser;
      state.error = null;

      if (typeof window !== "undefined") {
        // Atualiza usuário atual
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Atualiza também no array de usuários registrados
        const usersJSON = localStorage.getItem("users");
        if (usersJSON) {
          const users = JSON.parse(usersJSON) as User[];

          const updatedUsers = users.map((u) =>
            u.id === updatedUser.id ? updatedUser : u
          );

          localStorage.setItem("users", JSON.stringify(updatedUsers));
        }
      }

      alert("Dados alterados com sucesso!")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.user = action.payload;

        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Erro desconhecido.";
      });
  },
});

export const { logout, updateUser, register } = authSlice.actions;

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticad = (state: { auth: AuthState }) => !!state.auth.user;
export const selectLoading = (state: { auth: AuthState }) => state.auth.loading;

export default authSlice.reducer;
