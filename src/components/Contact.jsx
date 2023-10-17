import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form, 
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_dcah167',
      'template_zjbp3lj',
      {
        from_name: form.name,
        to_name: "João Bosco",
        from_email: form.email,
        to_email: "joaoboscodev@gmail.com",
        message: form.message,
      },
      'T1cj_wEECE1WcFnrS'
      )
      .then(
        () => {
          setLoading(false);
          alert("Muito obrigado. Entrarei em contato com você o mais rápido possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Algo deu errado. Por favor tente novamente. \
          Caso não funcione favor enviar um email para joaoboscodev@gmail.com");
        }
      );
    };
    
    return (
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>
        <p className={styles.sectionSubText2}>joaoboscodev@gmail.com</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual seu nome?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual seu email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Digite aqui sua mensagem"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>


          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");