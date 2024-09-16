'use client'

import { motion } from 'framer-motion'

export function HomeSection() {
  return (
    <section className="h-[818px] mt-32">
      <div className="flex flex-col items-start md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="flex flex-col justify-start gap-5 w-1/2 "
        >
          <h1 className="text-white text-[5rem] font-bold leading-[4.5rem] tracking-[-1px] max-w-[700px] uppercase">
            Transforme ideias em Resultados Reais
          </h1>
          <p className="text-white opacity-70 max-w-[515px]">
            A JobAgency é um estúdio digital que oferece criação de landing
            pages e design UI/UX acessíveis para novos empreendedores. Nosso
            objetivo é fornecer soluções impactantes e eficientes, com preços
            que atendem às suas necessidades.
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded max-w-48 mt-12">
            Saiba Mais
          </button>
        </motion.div>

        <motion.div
          className="flex justify-center items-center w-1/2 origin-center"
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/hero-illustration.svg"
            alt="Programador mexendo no computador"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
