

// Get the popup and its content
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');

// Function to show the popup
function showPopup() {
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
}

function logisticFunction(gender, prog_code, gpa, town_origin, year_cred){
    var gender_M=0;
    var prog_code_BIOG=0;
    var prog_code_CCOM=0;
    var prog_code_CONT=0;
    var prog_code_EFEE=0;
    var prog_code_ESCO=0;
    var prog_code_FINA=0;
    var prog_code_GEMA=0;
    var prog_code_GERE=0;
    var prog_code_MERC=0;
    var prog_code_SICI=0;
    var prog_code_SINF=0;
    var prog_code_SOFI=0;
    var prog_code_TIEL=0;
    var town_origin_ARECIBO=0;
    var town_origin_ARROYO=0;
    var town_origin_BARCELONETA=0;
    var town_origin_BARRANQUITAS=0;
    var town_origin_BAYAMON=0;
    var town_origin_CAGUAS=0;
    var town_origin_CAMUY=0;
    var town_origin_CANOVANAS=0;
    var town_origin_CAROLINA=0;
    var town_origin_CATANO=0;
    var town_origin_CAYEY=0;
    var town_origin_CIALES=0;
    var town_origin_CIDRA=0;
    var town_origin_COMERIO=0;
    var town_origin_COROZAL=0;
    var town_origin_DORADO=0;
    var town_origin_FAJARDO=0;
    var town_origin_GUAYAMA=0;
    var town_origin_GUAYANBO=0;
    var town_origin_GUAYNABO=0;
    var town_origin_GURABO=0;
    var town_origin_HATILLO=0;
    var town_origin_HUMACAO=0;
    var town_origin_ISABELA=0;
    var town_origin_JUNCOS=0;
    var town_origin_LAS_PIEDRAS=0;
    var town_origin_LOIZA=0;
    var town_origin_LUQUILLO=0;
    var town_origin_MANATI=0;
    var town_origin_MOROVIS=0;
    var town_origin_NAGUABO=0;
    var town_origin_NARANJITO=0;
    var town_origin_OROCOVIS=0;
    var town_origin_PONCE=0;
    var town_origin_RIO_GRANDE=0;
    var town_origin_SABANA_SECA=0;
    var town_origin_SAN_JUAN=0;
    var town_origin_SAN_LORENZO = 0;
    var town_origin_TOA_ALTA=0;
    var town_origin_TOA_BAJA=0;
    var town_origin_TRUJILLO_ALTO=0;
    var town_origin_VEGA_ALTA=0;
    var town_origin_VEGA_BAJA=0;
    var town_origin_YABUCOA=0;
    var town_origin_YAUCO=0;
    var year_cred_6TO=0;
    var year_cred_CNB=0;
    var year_cred_CUA=0;
    var year_cred_SEG=0;
    var year_cred_SNB=0;
    var year_cred_TER=0;
    var year_cred_TNB=0;

    if (gender == "M")
        gender_M = 1;
    
    if (prog_code == "BIOG")
        prog_code_BIOG = 1;
    else if (prog_code == "CCOM")
        prog_code_CCOM = 1;
    else if (prog_code == "CONT")
        prog_code_CONT = 1;
    else if (prog_code == "EFEE")
        prog_code_EFEE = 1;
    else if (prog_code == "ESCO")
        prog_code_ESCO = 1;
    else if (prog_code == "FINA")
        prog_code_FINA = 1;
    else if (prog_code == "GEMA")
        prog_code_GEMA = 1;
    else if (prog_code == "GERE")
        prog_code_GERE = 1;
    else if (prog_code == "MERC")
        prog_code_MERC = 1;
    else if (prog_code == "SICI")
        prog_code_SICI = 1;
    else if (prog_code == "SINF")
        prog_code_SINF = 1;
    else if (prog_code == "SOFI")
        prog_code_SOFI = 1;
    else if (prog_code == "TIEL")
        prog_code_TIEL = 1;
    
    if (town_origin == "ARECIBO")
        town_origin_ARECIBO = 1;
    else if (town_origin == "ARROYO")
        town_origin_ARROYO = 1;
    else if (town_origin == "BARCELONETA")
        town_origin_BARCELONETA = 1;
    else if (town_origin == "BARRANQUITAS")
        town_origin_BARRANQUITAS = 1;
    else if (town_origin == "BAYAMON")
        town_origin_BAYAMON = 1;
    else if (town_origin == "CAGUAS")
        town_origin_CAGUAS = 1;
    else if (town_origin == "CAMUY")
        town_origin_CAMUY = 1;
    else if (town_origin == "CANOVANAS")
        town_origin_CANOVANAS = 1;
    else if (town_origin == "CAROLINA")
        town_origin_CAROLINA = 1;
    else if (town_origin == "CATANO")
        town_origin_CATANO = 1;
    else if (town_origin == "CAYEY")
        town_origin_CAYEY = 1;
    else if (town_origin == "CIALES")
        town_origin_CIALES = 1;
    else if (town_origin == "CIDRA")
        town_origin_CIDRA = 1;
    else if (town_origin == "COMERIO")
        town_origin_COMERIO = 1;
    else if (town_origin == "COROZAL")
        town_origin_COROZAL = 1;
    else if (town_origin == "DORADO")
        town_origin_DORADO = 1;
    else if (town_origin == "FAJARDO")
        town_origin_FAJARDO = 1;
    else if (town_origin == "GUAYAMA")
        town_origin_GUAYAMA = 1;
    else if (town_origin == "GUAYNABO")
        town_origin_GUAYNABO = 1;
    else if (town_origin == "GURABO")
        town_origin_GURABO = 1;
    else if (town_origin == "HATILLO")
        town_origin_HATILLO = 1;
    else if (town_origin == "HUMACAO")
        town_origin_HUMACAO = 1;
    else if (town_origin == "ISABELA")
        town_origin_ISABELA = 1;
    else if (town_origin == "JUNCOS")
        town_origin_JUNCOS = 1;
    else if (town_origin == "LAS_PIEDRAS")
        town_origin_LAS_PIEDRAS = 1;
    else if (town_origin == "LOIZA")
        town_origin_LOIZA = 1;
    else if (town_origin == "LUQUILLO")
        town_origin_LUQUILLO = 1;
    else if (town_origin == "MANATI")
        town_origin_MANATI = 1;
    else if (town_origin == "MOROVIS")
        town_origin_MOROVIS = 1;
    else if (town_origin == "NAGUABO")
        town_origin_NAGUABO = 1;
    else if (town_origin == "NARANJITO")
        town_origin_NARANJITO = 1;
    else if (town_origin == "OROCOVIS")
        town_origin_OROCOVIS = 1;
    else if (town_origin == "PONCE")
        town_origin_PONCE = 1;
    else if (town_origin == "RIO_GRANDE")
        town_origin_RIO_GRANDE = 1;
    else if (town_origin == "SABANA_GRANDE")
        town_origin_SABANA_GRANDE = 1;
    else if (town_origin == "SAN_JUAN")
        town_origin_SAN_JUAN = 1;
    else if (town_origin == "SAN_LORENZO")
        town_origin_SAN_LORENZO = 1;
    else if (town_origin == "TOA_ALTA")
        town_origin_TOA_ALTA = 1;
    else if (town_origin == "TOA_BAJA")
        town_origin_TOA_BAJA = 1;
    else if (town_origin == "TRUJILLO_ALTO")
        town_origin_TRUJILLO_ALTO = 1;
    else if (town_origin == "VEGA_ALTA")
        town_origin_VEGA_ALTA = 1;
    else if (town_origin == "VEGA_BAJA")
        town_origin_VEGA_BAJA = 1;
    else if (town_origin == "YABUCOA")
        town_origin_YABUCOA = 1;
    else if (town_origin == "YAUCO")
        town_origin_YAUCO = 1;
    
    if(year_cred == "6TO")
        year_cred_6TO = 1;
    else if(year_cred == "CNB")
        year_cred_CNB = 1;
    else if(year_cred == "CUA")
        year_cred_CUA = 1;
    else if(year_cred == "SEG")
        year_cred_SEG = 1;
    else if(year_cred == "SNB")
        year_cred_SNB = 1;
    else if(year_cred == "TER")
        year_cred_TER = 1;
    else if(year_cred == "TNB")
        year_cred_TNB = 1;

    try{
        return 1 - 1 / (1 + Math.E ** (-(0.07333922759511774 +  + 0.0540*gender_M + -0.0163*prog_code_BIOG + 0.0581*prog_code_CCOM 
            + -0.0215*prog_code_CONT + -0.0824*prog_code_EFEE + -0.0135*prog_code_ESCO + -0.0242*prog_code_FINA + 0.0052*prog_code_GEMA 
            + -0.0028*prog_code_GERE + 0.0554*prog_code_MERC + 0.0423*prog_code_SICI + -0.0159*prog_code_SINF + -0.0028*prog_code_SOFI 
            + 0.1399*prog_code_TIEL + 0.0000*town_origin_ARECIBO + 0.0000*town_origin_ARROYO + 0.0000*town_origin_BARCELONETA 
            + 0.0000*town_origin_BARRANQUITAS + 0.0702*town_origin_BAYAMON + -0.0318*town_origin_CAGUAS + 0.0000*town_origin_CAMUY 
            + 0.0000*town_origin_CANOVANAS + -0.0159*town_origin_CAROLINA + 0.0502*town_origin_CATANO + 0.0000*town_origin_CAYEY 
            + 0.0000*town_origin_CIALES + -0.0079*town_origin_CIDRA + 0.0000*town_origin_COMERIO + 0.0132*town_origin_COROZAL 
            + 0.0422*town_origin_DORADO + 0.0000*town_origin_FAJARDO + 0.0000*town_origin_GUAYAMA + 0.0000*town_origin_GUAYANBO 
            + 0.0394*town_origin_GUAYNABO + 0.0291*town_origin_GURABO + -0.0080*town_origin_HATILLO + 0.0000*town_origin_HUMACAO 
            + 0.0000*town_origin_ISABELA + 0.0000*town_origin_JUNCOS + 0.0000*town_origin_LAS_PIEDRAS + 0.0000*town_origin_LOIZA 
            + 0.0000*town_origin_LUQUILLO + -0.0159*town_origin_MANATI + 0.0000*town_origin_MOROVIS + 0.0000*town_origin_NAGUABO 
            + -0.0346*town_origin_NARANJITO + -0.0080*town_origin_OROCOVIS + 0.0000*town_origin_PONCE + 0.0000*town_origin_RIO_GRANDE 
            + 0.0000*town_origin_SABANA_SECA + 0.0578*town_origin_SAN_JUAN + -0.0080*town_origin_SAN_LORENZO + -0.0346*town_origin_TOA_ALTA 
            + -0.0426*town_origin_TOA_BAJA + -0.0319*town_origin_TRUJILLO_ALTO + -0.0159*town_origin_VEGA_ALTA + 0.0422*town_origin_VEGA_BAJA 
            + 0.0000*town_origin_YABUCOA + 0.0000*town_origin_YAUCO + 0.0000*year_cred_6TO + 0.0000*year_cred_CNB + 0.0726*year_cred_CUA 
            + 0.0994*year_cred_SEG + 0.0291*year_cred_SNB + -0.1277*year_cred_TER + 0.0000*year_cred_TNB)));
    } catch(err){
        return 0;
    }    
}

// Add a click event listener to the document body to handle clicks on dynamically generated table rows
document.body.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element or its parent has the class 'table-row'
    const tableRow = target.closest('.table-row');
    if (tableRow) {
        // You can customize the content of the popup here
        const studentId = tableRow.querySelector('td:first-child').textContent;
        const index = Array.from(tableRow.parentNode.children).indexOf(tableRow);
        popupContent.innerHTML = `${studentId} has a ${index + 1}% chance for dropping out.`;
        showPopup();
    } else if (target === popup) {
        hidePopup();
    }
});

document.body.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element or its parent has the class 'table-row'
    const tableRow = target.closest('.table-row');
    if (tableRow) {
        // You can customize the content of the popup here
        const tds = tableRow.querySelectorAll('td');
        const studentId = tds[0].textContent;
        const gender = tds[1].textContent;
        const prog_code = tds[2].textContent;
        const gpa = tds[3].textContent;
        const town_origin = tds[4].textContent;
        const year_cred = tds[5].textContent;
        const probability = logisticFunction(gender, prog_code, gpa, town_origin, year_cred)
        const index = Array.from(tableRow.parentNode.children).indexOf(tableRow);
        popupContent.innerHTML = `${studentId} has a ${(probability * 100).toFixed(2)}% chance for dropping out.`;
        showPopup();
    } else if (target === popup) {
        hidePopup();
    }
});