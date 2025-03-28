export type SiteConfig = typeof siteConfig;
import { MdOutlineWorkspacePremium } from "react-icons/md"
import { FaRegCreditCard } from "react-icons/fa6";
import {GiSpeedometer } from "react-icons/gi";
export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  services: [
    {
      id: "licenciamento",
      label: "Licenciamento",
      content:
        "Todo veículo automotor deve ser licenciado anualmente conforme o CTB.As datas para pagamento variam por estado e de acordo com o final da placa do veículo. Acesse mais informações sobre Licenciamento ou solicite um orçamento..",
        href:'licenciamento'
    },
    {
      id: "transferencia",
      label: "Transferência",
      content:
        "Precisa transferir o veículo? Conte conosco. Faremos o processo de forma ágil e segura tanto para o vendedor quanto para o comprador. Sanamos todas as suas dúvidas e esclarecemos todos os pontos. Faça o orçamento!",
        href:'transferencia'
    },
    {
      id: "ipva",
      label: "IPVA",
      content:
        "É o imposto sobre propriedades de veículos automotores, pago anualmente. O Calendário de pagamento está relacionado ao estado no qual o veículo faz parte e ao número final da placa. Faça seu orçamento conosco ou tire suas dúvidas agora mesmo!",
        href:'.ipva'
    },
    {
      id: "cnh",
      label: "CNH",
      content:
        "Precisa renovar sua CNH ou solicitar a 2ª via? Vem com a gente, facilidade e práticidade. Fazemos o agendamento dos exames e da foto, consulte-nos informando sua categoria e tire suas dúvidas.",
        href:'/cnh'
    },
    {
      id: "crv",
      label: "2ª CRV",
      content:
        "Precisa tirar a 2ª via do certificado de registro do veículo? Faça sua solicitação de nova via do documento para transferência de propriedade e se precisar tire suas dúvidas com nosso atendimento.",
        href:'/crv'
    },
    {
      id: "caracteristicas",
      label: "Alteração de Características",
      content:
        "Fez ou quer fazer alguma alteração nas características do seu veículo? Cor, mecânica, combustível entre outros... faça o orçamento para tornar regular a alteração e/ou tire suas dúvidas no atendimento.",
        href:'/caracteristicas'
    },
    {
      id: "dados",
      label: "Alteração de Dados",
      content:
        "Realize a alteração de dados e documentos com facilidade e praticidade. Não deixe sua documentação irregular, tire suas dúvidas com nosso atendimento e solicite um orçamento!",
        href:'/dados'
    },
    {
      id: "debitos",
      label: "Débitos",
      content:
        "Quitamos os débitos financeiros do seu veículo, parcelamento flexível e atendimento ágil. Licenciamento, IPVA, DPVAT, Multas entre outros. Faça sua consulta e não deixe seu débito virar dívida ativa.",
      href: '/debitos'
    },
    {
      id: "divida",
      label: "Dívida Ativa",
      content:
        "Deixou de pagar licenciamento, IPVA ou multas e entrou para dívida ativa? Regularize o quanto antes. Iremos verificar todos os valores incluindo multas e juros e flexibilizaremos o pagamento para a regularização da pendência.",
      href: '/divida'
    },
    {
      id: "sinistro",
      label: "Baixa de Sinistro",
      content:
        "Baixe o sinistro do seu veículo com especialistas, faça a recuperação de veículos que sofreram danos ou que foram recuperados de furto/roubo. Torne-os aptos a voltar a circular. faça já a sua consulta!",
      href: '/sinistro'
    },


  ],
  featureItems: [
    {
      iconSize:48,
      icon: MdOutlineWorkspacePremium ,
      title: 'Serviço especializado',
      desc: 'Há anos no mercado, pronto para resolver seus problemas.'
    },
    {
      iconSize:44,
      icon: FaRegCreditCard,
      title: 'Parcelamento',
      desc: 'Parcele em 12x em seu cartão de crédito.'
    },
    {
      iconSize:44,
      icon: GiSpeedometer,
      title: 'Rapidez',
      desc: 'O melhor tempo de entrega da região.'
    }
  ],
  navItems: [
    {
      label: "Serviços",
      href: "/servicos",
    },
    {
      label: "Calendário",
      href: "/calendario",
    },
    {
      label: "Licenciamento",
      href: "/licenciamento",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
  ],
  navMenuItems: [
    {
      label: "Serviços",
      href: "/servicos",
    },
    {
      label: "Calendário",
      href: "/calendario",
    },
    {
      label: "Licenciamento",
      href: "/licenciamento",
    },
    {
      label: "Sobre",
      href: "/sobre",
    },
  ],
  links: {
    whatsapp: "https://github.com/heroui-inc/heroui",
    instagram: "https://www.instagram.com/"
  },
  contacts: {
    tel: '(91) 99994-5585'
  }
};
