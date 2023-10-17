import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, linkedin } from "../assets";

const Hero = () => {
  const shouldHideText = window.innerHeight < 600;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-10xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou o <span className='text-[#915EFF]'>João Bosco</span>
          </h1>
          {/* Verifique a variável shouldHideText antes de renderizar o <p> */}
          {!shouldHideText && (
            <p className={`${styles.heroSubText} mt-10 text-white-200 leading-loose`}>
              Programador apaixonado por transformar idéias em código. Especializado em várias linguagens e em busca de desafios. Meu objetivo é criar soluções tecnológicas inovadoras que tornem o mundo um lugar melhor. Explore meu portfólio e veja como posso contribuir para o seu próximo projeto.
            </p>
            
          )}
          {/* <div className="flex justify-center mr-20">
            <div className='inset-0 flex mt-8 card-img_hover'>
              <div
                onClick={() => window.open('https://www.linkedin.com/in/joaoboscodev/', "_blank")}
                className='bg-gradient-to-r from-blue-100 to-white w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={linkedin}
                  alt='source code'
                  className='w-8 object-contain white-bg'
                />
              </div>
            </div>
            <div className='flex mt-8 ml-4'>
              <div
                onClick={() => window.open('https://github.com/joaoboscodev', "_blank")}
                className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-8 object-contain'
                />
              </div>
            </div>
          </div> */}
        </div>

      </div>

      {/* <div className='absolute xs:bottom-4 bottom-8 w-full flex flex-col items-center justify-center'>
        <a href='#about'>
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        <p className="flex justify-center mt-4">Clique para saber mais</p>
      </div> */}
    </section>
  );
};

export default Hero;
