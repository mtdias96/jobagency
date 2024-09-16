export function HomeSection() {
  return (
    <section className="h-[818px] mt-32">
      <div className="flex flex-col items-start md:flex-row">
        <div className="flex flex-col justify-start gap-5 w-1/2 bg-red-500">
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
        </div>

        <div className="flex justify-center items-center w-1/2">
          <img
            src="/hero-illustration.svg"
            alt="Programador mexendo no computador"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
