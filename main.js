function calcularVolumenCono() {

    let radioCono = document.getElementById("inp-conoR").value.trim();
    let alturaCono = document.getElementById("inp-conoH").value.trim();
    let radioEsfera = document.getElementById("inp-esfera").value.trim();

    if (radioCono === "" || alturaCono === "" || radioEsfera === "") {
        alert("Por favor, completa todos los campos antes de calcular el volumen.");
        return;
    }

    radioCono = parseFloat(radioCono);
    alturaCono = parseFloat(alturaCono);
    radioEsfera = parseFloat(radioEsfera);

    if (isNaN(radioCono) || isNaN(alturaCono) || isNaN(radioEsfera)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const volumenCono = (1/3) * Math.PI * Math.pow(radioCono, 2) * alturaCono;
    const volumenEsfera = (4/3) * Math.PI * Math.pow(radioEsfera, 3);
    const volumenHelado = volumenCono + volumenEsfera;

    document.getElementById("resultado").textContent = `El volumen del cono es: ${volumenCono.toFixed(2)} cm³`;
    document.getElementById("resultadoEsfera").textContent = `El volumen de la esfera es: ${volumenEsfera.toFixed(2)} cm³`;
    document.getElementById("resultadoh").textContent = `El volumen del helado irregular es ${volumenHelado.toFixed(2)} cm^3`;
}





