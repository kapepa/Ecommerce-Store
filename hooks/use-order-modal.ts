import { ProductInt } from '@/interface/product';
import { create } from 'zustand'

interface OrderModalProps {
  open: boolean,
  data: ProductInt[]
  onClose: () => void,
  onOpen: () => void,
  onSetOpen: (data: ProductInt[]) => void,
  onCleanData: () => void,
}

const useOrderModal = create<OrderModalProps>(
  (set) => ({
    open: false,
    data: [],
    onClose: () => set({ open: false }),
    onOpen: () => set({ open: true }),
    onSetOpen: (data) => set({ data, open: true }),
    onCleanData: () => set({ data: [] }),
  })
);

export { useOrderModal };