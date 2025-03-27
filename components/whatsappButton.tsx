import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
type WhatsappButtonProps = {
  buttonText: string;
  classText: string
}

export default function WhatsappButton({ buttonText, classText}: WhatsappButtonProps) {
  return (
    <Button
      as={Link}
      color="success"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5589994136771&fbclid=PAZXh0bgNhZW0CMTEAAab2GNA1G_ZhL4aLCycgnhp9oxR2iGcjOKWcqTX-N4W9UqLKM0YkvsbatGA_aem_YBzauHuc6RBUuj-Q_WcwKg"
      variant="shadow"
      className={cn(`text-white ` + classText)}
      endContent={<FaWhatsapp size={25} />}
      radius="sm"
    >
      {buttonText}
    </Button>
  )
}