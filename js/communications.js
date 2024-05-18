
  
const url_comms = "js/communications.json";
const all_comms = {"coms":[
        {
            "title": "Integral Equation Modelling and Deep Learning",
            "conf_name": "Seminaire team MAX",
            "where": "Laboratoire LIX, Paris (France)",
            "when": {
                "start": "2023-11-07",
                "end": null
            }
        },
        {
            "title": "Integral Equation Modelling and Deep Learning",
            "conf_name": "Journées Nationales de Calcul Formel 2023 (JNCF)",
            "where": "CIRM, Luminy (France)",
            "when": {
                "start": "2023-03-08",
                "end": null
            }
        },
        {
            "title": "Integral Equation Modelling and Deep Learning",
            "conf_name": null,
            "where": "Laboratoire de Mathématiques appliquées du Havre, Le Havre (France)",
            "when": {
                "start": "2023-07-03",
                "end": null
            }
        },
        {
            "title": "Parameter Estimation Using Integral Equations",
            "conf_name": "Maple conference 2023",
            "where": "online",
            "when": {
                "start": "2023-10-27",
                "end": null
            }
        },
        {
            "title": "Parameter Estimation Using Integral Equations",
            "conf_name": "GT BIOSS",
            "where": "Lille (France)",
            "when": {
                "start": "2023-11-21",
                "end": null
            }
        },
        {
            "title": "Parameter Estimation with Integral Elimination",
            "conf_name": "Journées Nationales de Calcul Formel 2024 (JNCF)",
            "where": "CIRM, Luminy (France)",
            "when": {
                "start": "2024-03-11",
                "end": null
            }
        },
        {
            "title": "Exemples d'estimation de paramètres avec de l'élimination intégrale",
            "conf_name": "Journée d'étude",
            "where": "Laboratoire de Mathématiques appliquées du Havre, Le Havre (France)",
            "when": {
                "start": "2024-05-13",
                "end": null
            }
        },
        {
            "title": "Ma thèse en 180 secondes",
            "conf_name": "Poly'JAM IA",
            "where": "Polytech Lille, Lille (France)",
            "when": {
                "start": "2024-02-15",
                "end": null
            }
        },
        {
            "title": "Poster presentation for GIS students",
            "conf_name": "Journées RIC",
            "where": "Polytech Lille, Lille (France)",
            "when": {
                "start": "2024-02-15",
                "end": null
            }
        }
    ]
}

async function create_communications_div() {

    

    // const all_comms_data = await getData(url_comms);  
    // console.log("e",all_comms_data)
    // const all_comms= all_comms_data.comms 
    
    $("#comms").append("<pre>"+JSON.stringify(all_comms,null,'\t')+"</pre>");  
}

// Call the async function to fetch and log the data
create_communications_div();