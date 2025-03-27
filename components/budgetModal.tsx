
import { Button } from "@heroui/button";
import { RadioGroup, Radio } from "@heroui/radio";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/modal";
import { WhatsappIcon } from "./icons";
import { siteConfig } from "@/config/site";
import GpsFrame from "./gpsFrame";
import WhatsappButton from "./whatsappButton";

type BudgetModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
}

export default function BudgetModal({ isOpen, onOpenChange, onOpen }: BudgetModalProps) {
  return (
    <Modal isOpen={isOpen} placement="center" size="2xl" onOpenChange={onOpenChange}>
      <ModalContent className="p-4">
        {(onClose) => (
          <>
            
            <ModalHeader className="flex flex-col gap-1 text-lg lg:text-xl">Deseja ser atendido por qual unidade?</ModalHeader>
            <ModalBody className="flex flex-col text-center items-center border rounded-lg p-4">
            <RadioGroup className="flex self-end" defaultValue={'matriz'}>
              <Radio defaultChecked value="matriz"></Radio>
            </RadioGroup>
              <p className="font-bold text-lg">Matriz</p>
             <WhatsappButton classText="text-base font-bold underline" buttonText={siteConfig.contacts.tel}/>
              <GpsFrame />

            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}