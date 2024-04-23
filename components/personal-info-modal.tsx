import { FC } from "react";
import { Modal } from "./ui/modal";
import { usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { PersonalInfoForm } from "./personal-info-form";

const PersonalInfoModal: FC = () => {
  const open = usePersonalInfoModal(state => state.open);
  const onClose = usePersonalInfoModal(state => state.onClose);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div
        className="grid w-full grid-cols-1 items-center gap-x-6 gap-y-8"
      >
        <div
          className="flex justify-center"
        >
          <h4
            className="font-semibold text-2xl"
          >
            Remain your contact
          </h4>
        </div>
        <div
          className="flex justify-center"
        > 
          <PersonalInfoForm />
        </div>
      </div>
    </Modal>
  )
}

export { PersonalInfoModal }