import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [cardClass, setCardClass] = useState('bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full');
  const [cardClass2, setCardClass2] = useState('relative w-full h-[200px]');
  useEffect(() => {
    const updateCardClass = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 644) {
        setCardClass('bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full');
        setCardClass2('relative w-full h-[200px]');
      } else if (windowWidth < 408) {
        setCardClass('bg-tertiary p-5 rounded-2xl w-full');
        if(windowWidth < 394)
        setCardClass2('relative w-full h-[120px]');
        if(windowWidth < 376)
        setCardClass2('relative w-full h-[71px]');
      }
    };

    // Adicione um ouvinte de redimensionamento para atualizar o estado quando a largura da janela mudar.
    window.addEventListener('resize', updateCardClass);

    // Chame a função para definir a classe inicial com base no tamanho da janela atual.
    updateCardClass();

    // Limpe o ouvinte de redimensionamento quando o componente for desmontado.
    return () => {
      window.removeEventListener('resize', updateCardClass);
    };
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={cardClass}
      >
        <div className={cardClass2}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Principais projetos</p>
          <h2 className={`${styles.sectionHeadText}`}>Projetos</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            A seguir demonstro minhas habilidades e experiências a partir de projetos
            que simulam a atividade real no mercado de trabalho. Cada projeto 
            é brevemente descrito com links para repositórios de código.
            Refletem minha capacidade de resolver problemas complexos, trabalhar com diferentes 
            tecnologias e gerenciar projetos de forma eficaz.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
    </>
  )
};

export default SectionWrapper(Works, "");