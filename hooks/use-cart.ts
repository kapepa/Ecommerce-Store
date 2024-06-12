import { ProductInt } from "@/interface/product";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface CartStore {
  items: ProductInt[],
  addItem: (product: ProductInt) => void,
  removeItem: (id: string) => void,
  removeAll: () => void,
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find(prod => prod.id === product.id);

        if (existingItem) return toast.success("Item already in cart.");
        
        set({ items: [ ...get().items, product] });
        toast.success("Item added to cart.")
      },
      removeItem(id) {
        set({ items: [ ...get().items.filter(prod => prod.id !== id) ] })
        toast.success("Item removed from the cart.")
      },
      removeAll() {
        set({ items: [] })
        toast.success("all items removed from the cart.")
      },
    }),
    {
      name: "card-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export { useCart };