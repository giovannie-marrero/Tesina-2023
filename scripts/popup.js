

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

function setGender(gender){
    if (gender == "M")
        gender_M = 1;
}

function setProgramCode(prog_code) {
    const programCodes = {
        "BIOG": "prog_code_BIOG",
        "CCOM": "prog_code_CCOM",
        "CONT": "prog_code_CONT",
        "EFEE": "prog_code_EFEE",
        "ESCO": "prog_code_ESCO",
        "FINA": "prog_code_FINA",
        "GEMA": "prog_code_GEMA",
        "GERE": "prog_code_GERE",
        "MERC": "prog_code_MERC",
        "SICI": "prog_code_SICI",
        "SINF": "prog_code_SINF",
        "SOFI": "prog_code_SOFI",
        "TIEL": "prog_code_TIEL"
    };

    if (programCodes.hasOwnProperty(prog_code)) {
        window[programCodes[prog_code]] = 1;
    }
}

function setTownOrigin(town_origin) {
    const townOrigins = {
        "ARECIBO": "town_origin_ARECIBO",
        "ARROYO": "town_origin_ARROYO",
        "BARCELONETA": "town_origin_BARCELONETA",
        "BARRANQUITAS": "town_origin_BARRANQUITAS",
        "BAYAMON": "town_origin_BAYAMON",
        "CAGUAS": "town_origin_CAGUAS",
        "CAMUY": "town_origin_CAMUY",
        "CANOVANAS": "town_origin_CANOVANAS",
        "CAROLINA": "town_origin_CAROLINA",
        "CATANO": "town_origin_CATANO",
        "CAYEY": "town_origin_CAYEY",
        "CIALES": "town_origin_CIALES",
        "CIDRA": "town_origin_CIDRA",
        "COMERIO": "town_origin_COMERIO",
        "COROZAL": "town_origin_COROZAL",
        "DORADO": "town_origin_DORADO",
        "FAJARDO": "town_origin_FAJARDO",
        "GUAYAMA": "town_origin_GUAYAMA",
        "GUAYNABO": "town_origin_GUAYNABO",
        "GURABO": "town_origin_GURABO",
        "HATILLO": "town_origin_HATILLO",
        "HUMACAO": "town_origin_HUMACAO",
        "ISABELA": "town_origin_ISABELA",
        "JUNCOS": "town_origin_JUNCOS",
        "LAS_PIEDRAS": "town_origin_LAS_PIEDRAS",
        "LOIZA": "town_origin_LOIZA",
        "LUQUILLO": "town_origin_LUQUILLO",
        "MANATI": "town_origin_MANATI",
        "MOROVIS": "town_origin_MOROVIS",
        "NAGUABO": "town_origin_NAGUABO",
        "NARANJITO": "town_origin_NARANJITO",
        "OROCOVIS": "town_origin_OROCOVIS",
        "PONCE": "town_origin_PONCE",
        "RIO_GRANDE": "town_origin_RIO_GRANDE",
        "SABANA_GRANDE": "town_origin_SABANA_GRANDE",
        "SAN_JUAN": "town_origin_SAN_JUAN",
        "SAN_LORENZO": "town_origin_SAN_LORENZO",
        "TOA_ALTA": "town_origin_TOA_ALTA",
        "TOA_BAJA": "town_origin_TOA_BAJA",
        "TRUJILLO_ALTO": "town_origin_TRUJILLO_ALTO",
        "VEGA_ALTA": "town_origin_VEGA_ALTA",
        "VEGA_BAJA": "town_origin_VEGA_BAJA",
        "YABUCOA": "town_origin_YABUCOA",
        "YAUCO": "town_origin_YAUCO"
    };

    if (townOrigins.hasOwnProperty(town_origin)) {
        window[townOrigins[town_origin]] = 1;
    }
}

function setYearCred(year_cred){
    const yearCredMappings = {
        "6TO": "year_cred_6TO",
        "CNB": "year_cred_CNB",
        "CUA": "year_cred_CUA",
        "SEG": "year_cred_SEG",
        "SNB": "year_cred_SNB",
        "TER": "year_cred_TER",
        "TNB": "year_cred_TNB"
    };

    if (yearCredMappings.hasOwnProperty(year_cred)) {
        window[yearCredMappings[year_cred]] = 1;
    }
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

    setGender(gender);
    setProgramCode(prog_code);
    setTownOrigin(town_origin);
    setYearCred(year_cred);
    

    try{
        return 1 / (1 + Math.E ** (-(0.06135034619497988 + 0.0888*gender_M + -0.0195*prog_code_BIOG + 0.0393*prog_code_CCOM 
            + -0.0081*prog_code_CONT + -0.0310*prog_code_EFEE + 0.0131*prog_code_ESCO + -0.0056*prog_code_FINA + 0.0124*prog_code_GEMA 
            + 0.0250*prog_code_GERE + -0.0076*prog_code_MERC + 0.0091*prog_code_SICI + -0.0087*prog_code_SINF + 0.0072*prog_code_SOFI 
            + 0.0664*prog_code_TIEL + 0.0036*town_origin_ARECIBO + 0.0036*town_origin_ARROYO + 0.0000*town_origin_BARCELONETA 
            + -0.0021*town_origin_BARRANQUITAS + 0.0268*town_origin_BAYAMON + 0.0037*town_origin_CAGUAS + -0.0010*town_origin_CAMUY 
            + 0.0063*town_origin_CANOVANAS + 0.0128*town_origin_CAROLINA + 0.0194*town_origin_CATANO + 0.0063*town_origin_CAYEY 
            + -0.0010*town_origin_CIALES + -0.0030*town_origin_CIDRA + -0.0067*town_origin_COMERIO + -0.0049*town_origin_COROZAL 
            + -0.0273*town_origin_DORADO + -0.0002*town_origin_FAJARDO + -0.0010*town_origin_GUAYAMA + -0.0010*town_origin_GUAYANBO 
            + -0.0136*town_origin_GUAYNABO + 0.0054*town_origin_GURABO + -0.0019*town_origin_HATILLO + -0.0019*town_origin_HUMACAO 
            + 0.0036*town_origin_ISABELA + 0.0017*town_origin_JUNCOS + -0.0029*town_origin_LAS_PIEDRAS + 0.0027*town_origin_LOIZA 
            + -0.0019*town_origin_LUQUILLO + -0.0030*town_origin_MANATI + -0.0011*town_origin_MOROVIS + -0.0010*town_origin_NAGUABO 
            + -0.0125*town_origin_NARANJITO + -0.0021*town_origin_OROCOVIS + 0.0027*town_origin_PONCE + -0.0021*town_origin_RIO_GRANDE 
            + 0.0063*town_origin_SABANA_SECA + 0.0298*town_origin_SAN_JUAN + 0.0025*town_origin_SAN_LORENZO + -0.0191*town_origin_TOA_ALTA 
            + 0.0186*town_origin_TOA_BAJA + -0.0036*town_origin_TRUJILLO_ALTO + 0.0064*town_origin_VEGA_ALTA + 0.0075*town_origin_VEGA_BAJA 
            + -0.0010*town_origin_YABUCOA + 0.0036*town_origin_YAUCO + 0.0108*year_cred_6TO + -0.0021*year_cred_CNB + 0.1105*year_cred_CUA 
            + -0.0085*year_cred_SEG + 0.0027*year_cred_SNB + -0.0619*year_cred_TER + 0.0117*year_cred_TNB)));
    } catch(err){
        return 0;
    }

    /*try{
        return 1 / (1 + Math.E ** (-(2.501024525566896 + -0.1116*gender_M + -0.0596*prog_code_BIOG + 0.7420*prog_code_CCOM + -0.1107*prog_code_CONT 
            + -0.6017*prog_code_EFEE + 0.3328*prog_code_ESCO + -0.2752*prog_code_FINA + 0.2757*prog_code_GEMA + 0.1627*prog_code_GERE 
            + -0.0463*prog_code_MERC + 0.2803*prog_code_SICI + -0.4300*prog_code_SINF + 0.1173*prog_code_SOFI + 0.5298*prog_code_TIEL 
            + 0.6774*town_origin_ARECIBO + 0.5603*town_origin_ARROYO + 0.0000*town_origin_BARCELONETA + -0.2567*town_origin_BARRANQUITAS 
            + 0.0868*town_origin_BAYAMON + -0.0305*town_origin_CAGUAS + -0.1600*town_origin_CAMUY + 0.7156*town_origin_CANOVANAS 
            + 0.3265*town_origin_CAROLINA + 0.7458*town_origin_CATANO + 0.5645*town_origin_CAYEY + -0.1656*town_origin_CIALES 
            + -0.5815*town_origin_CIDRA + -0.8926*town_origin_COMERIO + -0.1187*town_origin_COROZAL + -1.0147*town_origin_DORADO 
            + -0.1149*town_origin_FAJARDO + -0.3959*town_origin_GUAYAMA + -0.2659*town_origin_GUAYANBO + -0.1800*town_origin_GUAYNABO 
            + 0.5166*town_origin_GURABO + -0.2623*town_origin_HATILLO + -0.3316*town_origin_HUMACAO + 0.4341*town_origin_ISABELA 
            + 0.2421*town_origin_JUNCOS + -0.6598*town_origin_LAS_PIEDRAS + 0.5120*town_origin_LOIZA + -0.2566*town_origin_LUQUILLO 
            + -0.4209*town_origin_MANATI + -0.0850*town_origin_MOROVIS + -0.2499*town_origin_NAGUABO + -0.1637*town_origin_NARANJITO 
            + -0.2205*town_origin_OROCOVIS + 0.4452*town_origin_PONCE + 0.0480*town_origin_RIO_GRANDE + 0.8491*town_origin_SABANA_SECA 
            + 0.0798*town_origin_SAN_JUAN + -0.1795*town_origin_SAN_LORENZO + -0.2989*town_origin_TOA_ALTA + 0.2430*town_origin_TOA_BAJA 
            + -0.2820*town_origin_TRUJILLO_ALTO + 0.2077*town_origin_VEGA_ALTA + 0.2668*town_origin_VEGA_BAJA + -0.1236*town_origin_YABUCOA 
            + 0.6305*town_origin_YAUCO + 0.9693*year_cred_6TO + -0.2639*year_cred_CNB + 0.1759*year_cred_CUA + -0.3515*year_cred_SEG 
            + 0.3477*year_cred_SNB + -0.6139*year_cred_TER + 0.9251*year_cred_TNB)));
    } catch(err){
        return 0;
    }*/
    
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