'use client'

import { motion } from 'framer-motion'

export function HomeSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden px-4 md:px-44 h-[1233px]">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center gap-12">
        <div className="relative flex flex-col  items-start md:items-start gap-5 lg:w-1/2">
          <div
            className="absolute -z-10"
            style={{
              width: '480px',
              height: '80vh',
              transform: 'rotate(-41.342deg)',
              borderRadius: '233.5px',
              background:
                'linear-gradient(180deg, rgba(84, 84, 212, 0.27) 0%, rgba(84, 84, 212, 0.11) 100%)',
              filter: 'blur(150px)'
            }}
          ></div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-2xl text-left uppercase font-black">
              Transforme ideias em Resultados Reais
            </h1>
            <p className="text-white opacity-80 text-base md:text-lg lg:text-xl max-w-lg mt-6 leading-7 pr-2.5 lg:leading-9">
              A JobAgency oferece criação de landing pages e design UI/UX
              acessíveis para novos empreendedores. Nosso objetivo é fornecer
              soluções impactantes e eficientes, com preços que atendem às suas
              necessidades.
            </p>
            <button className="bg-active-blue text-white py-3 px-6 rounded-lg mt-9 w-40">
              Saiba Mais
            </button>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center w-full md:w-1/2">
          <div
            className="absolute z-10"
            style={{
              width: '223px',
              height: '80vh',
              transform: 'rotate(44.85deg)',
              borderRadius: '233.5px',
              background:
                'linear-gradient(180deg, rgba(251, 168, 28, 0.26) 0%, rgba(224, 86, 136, 0.15) 100%)',
              filter: 'blur(150px)'
            }}
          ></div>

          <motion.div
            className="relative mt-20 w-[400px] lg:min-w-[680px] h-full md:mt-28"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/hero-illustration.svg"
              alt="Programador mexendo no computador"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
