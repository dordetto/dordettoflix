import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleChange(event) {
    //const {getAttribute, value} = event.target
    setValue(event.target.getAttribute("name"), event.target.value);
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.descricao}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={indice}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
