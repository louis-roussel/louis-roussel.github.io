const url_hal = "http://api.archives-ouvertes.fr/search/?q=authIdHal_s:louis-roussel&fl=fileMain_s,authFullName_s,title_s,docType_s,publisher_s,citationRef_s,halId_s,releasedDateY_i,releasedDate_tdate&wt=json&sort=releasedDate_tdate desc";


async function getData(url) {
    const response = await fetch(url);
    return response.json();
}



// pubs is a list
function group_pubs_by_filter(pubs,filter){
    let res = {};
    pubs.forEach(p => {
        const key = p[filter]; 
        if (!(key in res)) {
            res[key] = [];
        }; 
        res[key].push(p);       
    });
    return res;
}


// pubs is a list
function group_pubs_by_year(pubs){
    return group_pubs_by_filter(pubs, "releasedDateY_i")
}
function group_pubs_by_type(pubs){
    return group_pubs_by_filter(pubs, "docType_s")
}

function group_pubs_by_year_type(pubs){
    let res = group_pubs_by_year(pubs); 
    for (const[key, value] of Object.entries(res)) { 
        res[key] = group_pubs_by_type(value) 
    } 
    const keys = Object.keys(res);
    keys.sort((a, b) => b - a); 
    const sorted_res = [];
    keys.forEach(key => {
        sorted_res.push([key, res[key]]) 
    }); 
    return sorted_res;
}


async function create_publications_div() {
    const all_data_hal = await getData(url_hal);  
    const all_pubs =all_data_hal.response.docs 
    const all_pubs_grouped = group_pubs_by_year_type(all_pubs) 
     
    all_pubs_grouped.forEach(e => {
        let year = e[0];
        let pubs_per_year = e[1];
         
        let div_year = $('<div class="pubs_year_div"></div>');
        div_year.append('<div class="pubs_year">'+year+'</div>');
        for (const[type, pubs_per_type] of Object.entries(pubs_per_year)) { 
            let div_type = $('<div class="pubs_type_div"></div>');
            div_type.append('<div class="pubs_type">'+type+'</div>');
            pubs_per_type.forEach(pub => {
                let div_pub = $('<div class="pub"></div>');
                 div_pub.append('<a href="https://hal.science/'+ pub.halId_s +'">'+ pub.title_s +'</a>')
                div_pub.append('<p class=authors>'+pub.authFullName_s.join(", ")+'</p>')
                div_pub.append('<p class=cite_refs>'+pub.citationRef_s+'</p>')
                div_pub.append('<a href="'+pub.fileMain_s+'"><img src="img/Haltools_pdf.png"></img></a>')
                div_pub.append('<a href="https://hal.science/'+ pub.halId_s +'/bibtex"><img src="img/Haltools_bibtex3.png"></img></a>')
                div_type.append(div_pub)
             });  
            div_year.append(div_type)
        } 
        $("#pubs").append(div_year)
    });  
}

// Call the async function to fetch and log the data
create_publications_div();