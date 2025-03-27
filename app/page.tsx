
"use client";
import { siteConfig } from "@/config/site";
import {

  useDisclosure
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardFooter } from '@heroui/card'
import Link from "next/link";

import Hero from "@/components/sections/Hero";
import BudgetModal from "@/components/budgetModal";
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
      {/* FEATURES SECTION */}
      <div className="container mx-auto max-w-7xl">
        <section className="container mx-auto my-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
            {siteConfig.featureItems.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 "
              >
                <feature.icon size={feature.iconSize} className="text-4xl text-primary" />
                <div>
                  <h3 className="text-lg font-bold uppercase">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES TAB SECTION */}
        <section className="flex flex-col items-center justify-center p-6 bg-black">
          <div className="space-y-2 flex-col items-center justify-center py-6">
            <h2 className="uppercase text-xl md:text-2xl text-center text-white font-bold">Serviços Despachante Rápido</h2>
            <p className="text-base md:text-xl text-center text-white">Navegue pelos nossos serviços até encontrar a solução para o seu problema!</p>
          </div>


          <Tabs color="primary" placement="top" size="lg" className="p w-screen max-w-7xl px-6 md:px-10 justify-center">
            {siteConfig.services.map((item) => (
              <Tab key={item.id} title={item.label} className="" >
                <Card className="mx-6 md:mx-10 p-6 ">
                  <CardBody className="text-base md:text-lg">{item.content}</CardBody>
                  <CardFooter className="w-full  flex-row items-center justify-between">
                    <Button onPress={onOpen} variant="solid" size="lg" className="w-[58%]  underline">Orçamento</Button>
                    <Link className="underline w-[38%]" href={item.href}><Button variant="faded" size="lg" className="  w-full underline">Mais</Button></Link>
                  </CardFooter>
                </Card>
              </Tab>
            ))}

          </Tabs>


        </section>
        <section>

        </section>
      </div>

    </>

  );
}
