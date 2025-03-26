// components/Hero.tsx
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import Image from "next/image";
import BgHero from '../../public/images/hero.jpeg'
interface HeroProps {
  
  titleText: string;
  subtitleText: string;
  buttonText?: string;
}

export default function Hero({
  
  titleText,
  subtitleText,
  buttonText = "Orçamento",
}: HeroProps) {
  // Verifica se a imagem começa com '/' (caminho absoluto no Next.js)
  

  return (
    <div className="relative w-full h-[90vw] md:h-[50vw] lg:h-[30vw] overflow-hidden">
      {/* Imagem de fundo com Next Image */}
      <Image
        src={BgHero}
        alt="Background Hero"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      {/* Conteúdo alinhado com o layout */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container flex justify-end">
          <div className="max-w-sm mx-6 bg-primary/90 rounded-md p-8 text-start">
            <p className={title({ size: "sm" })}>{titleText}</p>
            <br />
            <div className={subtitle({ class: "mt-4" })}>
              {subtitleText}
            </div>
            <div className="flex justify-end">
              <Button
                variant="ghost"
                className="border-0 underline text-base"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}