import React, { useState, useEffect } from "react";
import regionesYComunas from "../data/regionesycomunas"; // Lo pondremos en otro archivo modular

function RegistroForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    edad: "",
    contrasena: "",
    region: "",
    comuna: "",
  });

  const [comunasDisponibles, setComunasDisponibles] = useState([]);
  const [validaciones, setValidaciones] = useState({
    telefono: null,
    contrasena: null,
  });

  useEffect(() => {
    if (formData.region) {
      setComunasDisponibles(regionesYComunas[formData.region] || []);
    } else {
      setComunasDisponibles([]);
    }
  }, [formData.region]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "telefono") {
      setValidaciones((prev) => ({
        ...prev,
        telefono: /^\+56 9 \d{4} \d{4}$/.test(value.trim()),
      }));
    }

    if (name === "contrasena") {
      setValidaciones((prev) => ({
        ...prev,
        contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, telefono, edad, contrasena, region, comuna } = formData;

    if (
      !nombre || !correo || !telefono || !edad ||
      !contrasena || !region || !comuna
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert("Correo electrónico inválido.");
      return;
    }

    if (!validaciones.telefono) {
      alert("Formato de teléfono incorrecto.");
      return;
    }

    if (!validaciones.contrasena) {
      alert("Contraseña no segura.");
      return;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 18 || edadNum > 120) {
      alert("La edad debe estar entre 18 y 120 años.");
      return;
    }

    alert("¡Registro exitoso! 🎉");
  };

  return (
    <section className="registro">
      <h2>Regístrate para recibir nuevas recetas</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder="Nombre Completo" onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input name="telefono" type="text" placeholder="+56 9 XXXX XXXX" onChange={handleChange} required />
        <span style={{ color: validaciones.telefono ? "green" : "#a26161" }}>
          Formato: +56 9 XXXX XXXX
        </span>

        <input name="edad" type="number" placeholder="Edad" onChange={handleChange} required />
        <input name="contrasena" type="password" placeholder="Contraseña segura" onChange={handleChange} required />
        <span style={{ color: validaciones.contrasena ? "green" : "#a26161" }}>
          Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número
        </span>

        <label>Región:</label>
        <select name="region" onChange={handleChange} value={formData.region} required>
          <option value="">Seleccione Región</option>
          {Object.keys(regionesYComunas).map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <label>Comuna:</label>
        <select name="comuna" onChange={handleChange} value={formData.comuna} required>
          <option value="">Seleccione Comuna</option>
          {comunasDisponibles.map((comuna) => (
            <option key={comuna} value={comuna}>{comuna}</option>
          ))}
        </select>

        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
}

export default RegistroForm;