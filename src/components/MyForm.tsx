import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [nome, setnome] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ nome?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formErrors: { nome?: string; email?: string } = {};

    if (!nome.trim()) {
      formErrors.nome = 'nome é obrigatório';
    }

    if (!email.trim()) {
      formErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email inválido';
    }

    if (Object.keys(formErrors).length === 0) {
      console.log('Formulário enviado:', { nome, email });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
        />
        {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
