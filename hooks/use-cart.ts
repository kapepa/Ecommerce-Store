import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface CartStore {
  ids: string[],
  addId: (productId: string) => void,
  removeId: (productId: string) => void,
  removeAllIds: () => void,
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      ids: [],
      addId: (productId) => {
        set({ ids: [ ...get().ids, productId] });
      },
      removeId(productId) {
        set({ ids: [ ...get().ids.filter(id => id !== productId) ] })
        // toast.success("Item removed from the cart.")
      },
      removeAllIds() {
        set({ ids: [] })
        // toast.success("All items removed from the cart.")
      },
    }),
    {
      name: "card-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export { useCart };