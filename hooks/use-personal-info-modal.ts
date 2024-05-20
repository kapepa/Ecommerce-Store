import { UserInt } from "@/interface/user";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export type UserType = Partial<Pick<UserInt, "name" | "address" | "phone">>

interface PersonalInfoModalProps {
  open: boolean,
  info: UserType | undefined,
  onOpen: () => void,
  onClose: () => void,
  setInfo: (entity: { [key in keyof UserType]: string } ) => void,
}

const usePersonalInfoModal = create(
  persist<PersonalInfoModalProps>(
    (set, get) => ({
      open: false,
      info: undefined,
      onOpen: () => set(() => ({ open: true })),
      onClose: () => set(() => ({ open: false })),
      setInfo: (entity) =>{
        set((state) => ({
          info: Object.assign( state.info ?? {}, entity),
        }))
      },
    }),
    {
      name: 'personal-info',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { usePersonalInfoModal }