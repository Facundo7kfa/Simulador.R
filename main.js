function obtenerNombreApellido() {
    let Nombre = "";
    let Apellido = "";
  
    while (Nombre === "" && Apellido === "") {
      alert("Nombre y apellido son requeridos");
  
      Nombre = prompt("Ingrese su nombre");
      Apellido = prompt("Ingrese su apellido");
    }
  
    return [Nombre, Apellido];
  }
  
  function obtenerNumeroArea() {
    let NumeroArea = prompt("Ingrese su número de área por favor");
  
    while (NumeroArea === "" || isNaN(Number(NumeroArea))) {
      alert("El número de área no es válido");
      NumeroArea = prompt("Ingrese su número de área por favor");
    }
  
    return NumeroArea;
  }
  
  function saludarUsuario(nombre, apellido, numeroArea) {
    switch (Number(numeroArea)) {
      case 55:
        alert(`Hola Soldado ${nombre} ${apellido}, bienvenido.`);
        break;
      case 88:
        alert(`Hola Doctor ${nombre} ${apellido}, bienvenido.`);
        break;
      case 77:
        alert(`Hola Teniente ${nombre} ${apellido}, bienvenido.`);
        break;
      default:
        alert(`El número es incorrecto, por favor intente nuevamente.`);
    }
  }
  
  function obtenerGradosGeiger() {
    let numeroRadio;
    let numeroRadioValido = false;
  
    do {
      numeroRadio = prompt("Ahora coloque los grados que está marcando su Geiger-Müller");
  
      if (numeroRadio !== "" && !isNaN(Number(numeroRadio))) {
        numeroRadioValido = true;
      } else {
        alert("Debes ingresar un valor válido para los grados de Geiger-Müller.");
      }
    } while (!numeroRadioValido);
  
    return numeroRadio;
  }
  
  function evaluarGradosGeiger(numeroRadio) {
    if (Number(numeroRadio) < 10) {
      alert("Puedes estar tranquilo, no hay peligro.");
    } else if (Number(numeroRadio) >= 10 && Number(numeroRadio) <= 20) {
      alert("Por precaución, sería prudente visitar la enfermería.");
    } else if (Number(numeroRadio) >= 20 && Number(numeroRadio) <= 30) {
      alert("Usted estuvo expuesto a altos grados de radiación... si no se trata de manera inmediata perderá la vida.");
    }
  }
  
  const [nombre, apellido] = obtenerNombreApellido();
  const numeroArea = obtenerNumeroArea();
  saludarUsuario(nombre, apellido, numeroArea);
  const gradosGeiger = obtenerGradosGeiger();
  evaluarGradosGeiger(gradosGeiger);