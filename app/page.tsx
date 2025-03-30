"use client";
import Image from "next/image";
import { IoShieldCheckmark } from "react-icons/io5";
import { siteConfig } from "@/config/site";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { FaMapPin, FaRegQuestionCircle } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import {
  useDisclosure
} from "@heroui/modal";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardFooter } from '@heroui/card'
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import Hero from "@/components/sections/Hero";
import BudgetModal from "@/components/budgetModal";
import { subtitle, title } from "@/components/primitives";
import WhatsappButton from "@/components/whatsappButton";
import BgCalendar from '@/public/images/bg_calendar.png'
import BgSupport from '@/public/images/bg_support.png'
import { FaRegClock } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { TbGps } from "react-icons/tb";
import DetranImage from '../public/images/detran.webp'
import IsoImage from '../public/images/iso.webp'
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <BudgetModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
      <Hero
        infoText="Presencial ou Online"
        titleText="Despachante de Trânsito"
        subtitleText="Resolva a documentação do seu veículo, IPVA, licenciamento, transferências e mais."
      />
      <div className="container mx-auto max-w-5xl ">
        {/* FEATURES SECTION */}

        <section className="container mx-auto py-6 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {siteConfig.featureItems.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-sm"
              >
                <feature.icon size={feature.iconSize} className="text-3xl sm:text-4xl text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES TAB SECTION */}
        <section className="flex flex-col items-center justify-center p-4 sm:p-6 bg-foreground">
          <div className="space-y-2 text-center py-6 px-4">
            <h2 className="uppercase text-lg sm:text-xl md:text-2xl text-white font-bold">Serviços Despachante Rápido</h2>
            <p className="text-sm sm:text-base md:text-xl text-white">
              Navegue pelos nossos serviços até encontrar a solução para o seu problema!
            </p>
          </div>

          <Tabs color="primary" placement="top" size="lg" className="p w-screen max-w-5xl px-6 md:px-10 justify-center">
            {siteConfig.services.map((item) => (
              <Tab key={item.id} title={item.label}>
                <Card className="mx-2 sm:mx-6 md:mx-10 p-4 sm:p-6">
                  <CardBody className="text-sm sm:text-base md:text-lg">{item.content}</CardBody>
                  <CardFooter className="flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    <Button
                      onPress={onOpen}
                      variant="solid"
                      size="lg"
                      className="w-full sm:w-[58%] mb-2 sm:mb-0"
                    >
                      Orçamento
                    </Button>
                    <Link
                      className="w-full sm:w-[38%]"
                      href={item.href}
                    >
                      <Button
                        variant="faded"
                        size="lg"
                        className="w-full"
                      >
                        Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </section>

        {/* CONTACT SECTION */}
        <section className="container mx-auto p-4 sm:py-14 py-6  flex-col justify-center items-center ">
          <div className="space-y-4 text-center py-6 relative z-10">
            <h2 className="uppercase text-lg sm:text-xl font-bold">
              Receba seu orçamento completo
            </h2>
            <p className="text-sm sm:text-base font-medium italic">
              Atendimento em poucos minutos
            </p>
            <p className="text-xs sm:text-sm text-center mx-auto max-w-[90%] sm:max-w-[30vw] ">
              Descreva sua demanda e informe os dados do seu veículo que passaremos um orçamento completo para a sua regularização.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <WhatsappButton
              buttonText="Entre em contato agora"
              classText="font-bold animate-bounce p-4 sm:p-6 text-sm sm:text-lg"
            />
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs font-semibold">Não se preocupe, os seus dados estão seguros.</p>
              <IoShieldCheckmark size={16} className="text-green-500" />
            </div>
          </div>
        </section>

        {/* CALENDAR SECTION */}
        <section className="container  mx-auto flex-col justify-center items-center space-y-8">
          <div className="relative flex items-center justify-center md:justify-start md:px-14">
            {/* Imagem de fundo */}
            <div className="absolute top-0 left-0 w-full h-[100%] md:h-[30vw] lg:h-[18vw] xl:h-[18vw] 2xl:h-[14vw]">
              <Image
                src={BgCalendar}
                alt="Background Calendar"
                fill
                className="object-cover object-center"
                priority
                quality={100}
              />
            </div>

            {/* Bloco de texto na frente da imagem */}
            <div className="relative z-10 mt-6 mb-6  md:mb-0">
              <div className="container flex justify-end">
                <div className="max-w-sm lg:mx-14 bg-primary/90 mx-4 sm:mx-0 rounded-md p-8 text-start shadow-lg">
                  <p className={'text-xs lg:text-sm font-medium'}>{'Não perca os prazos'}</p>
                  <p className={"text-lg lg:text-xl uppercase font-bold"}>{'Calendário & Prazos para Pagamento'}</p>

                  <div className={'text-sm lg:text-base'}>
                    {'Acompanhe o calendário do Licenciamento e IPVA. As datas são definidas pelo número final da sua placa e de acordo com o estado de registro do veículo.'}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      as={Link}
                      variant="ghost"
                      className="border-0 underline text-base"
                      href={'/licenciamento'}
                    >
                      {'Licenciamento'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SUPPORT SECTION */}
        <section className="container mx-auto p-4 sm:p-6 py-6 flex-col justify-center items-center ">
          <div className="max-w-md mx-auto">
            <div className="space-y-4 text-center py-6 relative z-10">
              <h2 className="uppercase text-lg sm:text-xl font-bold">
                COMO FALAR CONOSCO?
              </h2>

              <p className="text-xs sm:text-sm text-justify mx-auto max-w-[90%] sm:max-w-[50vw] ">
                Conheça nossos canais de contato e onde estamos localizados!
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-4 ">
              <div className="space-y-2">
                <p className="uppercase font-medium text-base">Endereço - Unidade Matriz</p>
                <Link target="_blank" className="hover:text-primary flex flex-row items-center gap-2" href={siteConfig.links.googlemaps} >
                  <TbGps size={28} />
                  <p className="font-light text-base">{siteConfig.contacts.address}</p>
                </Link>
              </div>

              <div className="space-y-2">
                <p className="uppercase font-medium text-base">Dados de contato</p>
                <Link target="_blank" className="hover:text-primary flex flex-row items-center gap-2" href={siteConfig.links.whatsapp} >
                  <FaWhatsapp size={24} />
                  <p className="font-light text-base">WhatsApp: {siteConfig.contacts.tel}</p>
                </Link>
              </div>
              <div className="space-y-2">
                <p className="uppercase font-medium text-base">Horário de Atendimento</p>
                <div className="hover:text-primary flex flex-row items-center gap-2" >
                  <FaRegClock size={26} />
                  <p className="font-light text-base">WhatsApp: {siteConfig.contacts.schedule}</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4 mx-auto">
                <Link href={siteConfig.links.whatsapp} target="_blank">
                  <div className="flex p-2 items-center justify-center bg-primary rounded-md hover:bg-primary/60">
                    <FaWhatsapp size={30} className="text-foreground " />
                  </div>
                </Link>
                <Link href={siteConfig.links.instagram} target="_blank">
                  <div className="flex p-2 items-center justify-center bg-primary rounded-md hover:bg-primary/60">
                    <FiInstagram size={30} className="text-foreground " />
                  </div>
                </Link>
                <Link href={siteConfig.links.googlemaps} target="_blank">
                  <div className="flex p-2 items-center justify-center bg-primary rounded-md hover:bg-primary/60">
                    <TbBrandGoogleMaps size={30} className="text-foreground " />
                  </div>
                </Link>
              </div>

            </div>
          </div >
        </section >

        {/* CALENDAR SECTION */}
        <section className="container  mx-auto flex-col justify-center items-center space-y-8 ">
          <div className="relative flex items-center justify-center md:justify-start md:px-14">
            {/* Imagem de fundo */}
            <div className="absolute top-0 left-0 w-full h-[100%] md:h-[30vw] lg:h-[18vw] xl:h-[18vw] 2xl:h-[14vw]">
              <Image
                src={BgSupport}
                alt="Background Support"
                fill
                className="object-cover object-center"
                priority
                quality={100}
              />
            </div>

            {/* Bloco de texto na frente da imagem */}
            <div className="relative z-10 mt-6 mb-6  md:mb-0">
              <div className="container flex justify-end">
                <div className="max-w-sm lg:mx-14 bg-primary/90 mx-4 sm:mx-0 rounded-md p-8 text-start shadow-lg">
                  <p className={'text-xs lg:text-sm font-medium'}>{'Tire suas dúvidas'}</p>
                  <p className={"text-lg lg:text-xl uppercase font-bold"}>{'Está com alguma Dúvida?'}</p>

                  <div className={'text-sm lg:text-base'}>
                    {'Atendimento especializado e pronto para atender as suas dúvidas. Convenhamos, ser atendido de forma rápida por alguém que sabe o que diz é o que faz a diferença.'}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onPress={onOpen}
                      variant="ghost"
                      className="border-0 underline text-base"

                    >
                      {'Falar com Suporte'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        < section className="container mx-auto p-4 sm:p-6 my-6 relative" >
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <FaRegQuestionCircle className="text-neutral-400/75 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[36vw] md:h-[36vw] lg:w-[24vw] lg:h-[24vw]" />
          </div>
          <div className="space-y-2 text-center py-6 relative z-10">
            <h2 className="uppercase text-lg sm:text-xl  font-bold">
              Dúvidas frequentes - FAQ
            </h2>
            <p className="text-sm sm:text-base md:text-xl">
              Confira as respostas rápidas para as suas dúvidas mais frequentes
            </p>
          </div>
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  overflowY: "unset",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  overflowY: "hidden",
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
            selectionBehavior="replace"
            variant="splitted"
            className="max-w-5xl mx-auto px-2 sm:px-4"
          >
            <AccordionItem className="italic" key="1" aria-label="Accordion 1" title="O licenciamento atrasou. E agora?">
              O atraso do pagamento faz com que o veículo fique irregular, o que configura uma infração de trânsito, o que pode inclusive ocasionar multa e apreensão. O licenciamento certifica que todos os débitos do veículo foram quitados. A ausência do pagamento pode ocasionar a apreensão do veículo, infração gravíssima com multa de 293,47 e 7 pontos na CNH. Consulte nossa seção de Licenciamento.
            </AccordionItem>
            <AccordionItem className="italic" key="2" aria-label="Accordion 2" title="Quais risco se eu não transferir o veículo em 30 dias?">
              Fere o artigo 233 do código de trânsito brasileiro que diz &apos;Deixar de efetuar o registro de veículo no prazo de trinta dias, junto ao órgão executivo de trânsito, ocorridas as hipóteses previstas no art. 123: Infração - grave; Penalidade - multa; Medida administrativa - retenção do veículo para regularização.&apos; O não pagamento do IPVA pode acarretar a inclusão do seu nome nos birôs de credito e a dívida será inclusa como dívida ativa, o veículo não poderá ser licenciado além de gerar juros.
            </AccordionItem>
            <AccordionItem className="italic" key="3" aria-label="Accordion 3" title="Quando devo pagar o IPVA do meu carro?">
              Cada estado possuí um calendário de pagamento que é disponibilizado anualmente pelo seu respectivo Detran. Acompanhe nossa seção de calendário ou tire suas dúvidas com a nossa equipe.
            </AccordionItem>
            <AccordionItem className="italic" key="4" aria-label="Accordion 4" title="É possível renovar a minha CNH com um despachante?">
              Sim, a renovação da carteira nacional de habilitação pode ser feita diretamente conosco, fazemos o recolhimento da documentação necessária e realizamos o agendamento de exame médico e foto.
            </AccordionItem>
            <AccordionItem className="italic" key="5" aria-label="Accordion 5" title="Como faço para obter o CRLV?">
              O CRLV é obtido após o licenciamento do veículo com o despachante rápido, é um documento de porte obrigatório seja ele em versão física ou digital, por isso, sempre tenha uma versão dele em mãos.
            </AccordionItem>
          </Accordion>
        </section >
        <section className="container text-white mx-auto p-6 md:p-10  flex-col justify-center items-center bg-foreground space-y-6">
          <h2 className=" font-bold uppercase text-base">Certificações</h2>
          <div className="flex font-light text-sm flex-row gap-6">
            <div className="space-y-2">
              <p className="">Credenciado
                DETRAN - 918/89</p>
              <Image alt="Certificado Credenciado
                DETRAN " src={DetranImage} />
            </div>

            <div className="space-y-2">
              <p>ISO 9001</p>
              <Image alt="Certificado
                ISO " src={IsoImage} />
            </div>
          </div>
        </section >

      </div >
    </>
  );
}