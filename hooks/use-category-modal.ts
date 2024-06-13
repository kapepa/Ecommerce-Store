import { CategoryInt } from '@/interface/category'
import { NavigationInt } from '@/interface/navigation'
import { create } from 'zustand'

interface UseCategoryNavModalProps {
  open: boolean,
  navigation: NavigationInt[],
  onOpen: () => void,
  onClose: () => void,
  setNavigation: (nav: NavigationInt[]) => void,
}

const useCategoryNavModal = create<UseCategoryNavModalProps>(
  (set) => ({
    open: true,
    navigation: [],
    onClose: () => set({ open: false }),
    onOpen: () => set({ open: true }),
    setNavigation: (navigation) => set((state) => Object.assign(state, {navigation}))
  })
)

export { useCategoryNavModal }