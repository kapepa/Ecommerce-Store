import { ProductInt } from '@/interface/product'
import { create } from 'zustand'

interface PreviewModalStore {
  isOpen: boolean,
  data?: ProductInt,
  onOpne: (data: ProductInt) => void,
  onClose: () => void,
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpne: (data: ProductInt) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export { usePreviewModal }