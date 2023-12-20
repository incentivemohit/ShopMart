import { Product } from "@/app/utils/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("cart/getUsers", async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return response.data;
});

interface ProductState {
  products: Product[];
  cartproducts: Product[];
  totalAmount: number;
  loading: string;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  cartproducts: [],
  totalAmount: 0,
  loading: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartproducts = [...state.cartproducts, action.payload];
    },

    increament: (state, action) => {
      const index = state.cartproducts.findIndex(
        (product) => product._id === action.payload
      );

      state.cartproducts[index].quantity += 1;
    },

    decreament: (state, action) => {
      const index = state.cartproducts.findIndex(
        (product) => product._id === action.payload
      );

      if (index !== -1) {
        state.cartproducts[index].quantity -= 1;

        if (state.cartproducts[index].quantity < 1) {
          state.cartproducts[index].quantity = 1;
        }
      }
    },

    totalBill: (state) => {
      let totalPrice = 0;

      state.cartproducts.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });

      state.totalAmount = Math.floor(totalPrice);
    },

    removeItem: (state, action) => {
      const index = state.cartproducts.findIndex(
        (product) => product._id === action.payload
      );

      state.totalAmount -=
        state.cartproducts[index].price * state.cartproducts[index].quantity;
      state.cartproducts.splice(index, 1);
    },

    reset: (state, action) => {
      state.cartproducts = action.payload;
    },

    searchProducts: (state, action) => {
      state.products = action.payload.products.filter((product: Product) => {
        return product.title
          .toLowerCase()
          .trim()
          .includes(action.payload.search.toLowerCase().trim());
      });
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.products = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export const {
  addProduct,
  increament,
  decreament,
  totalBill,
  removeItem,
  reset,
  searchProducts,
  setProducts,
} = productSlice.actions;
export default productSlice.reducer;
