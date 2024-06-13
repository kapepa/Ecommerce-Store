import { create } from 'zustand'

interface OrderModalProps {
  open: boolean,
  onClose: () => void,
  onOpen: () => void,
}

const useOrderModal = create<OrderModalProps>(
  (set) => ({
    open: false,
    onClose: () => set({ open: false }),
    onOpen: () => set({ open: true }),
  })
);

export { useOrderModal };