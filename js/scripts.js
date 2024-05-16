const url_hal = "http://api.archives-ouvertes.fr/search/?q=authIdHal_s:louis-roussel&fl=files_s,label_s,label_bibtex,docType_s,releasedDateY_i,releasedDate_tdate&wt=json&sort=releasedDate_tdate desc";


async function getData(url) {
    const response = await fetch(url);
    return response.json();
}


async function create_publications_div() {
    const all_data_hal = await getData(url_hal); 
    
    const all_pubs =all_data_hal.response.docs
    console.log(all_pubs);
    $("#pubs").append("<pre>"+JSON.stringify(all_pubs,null,'\t')+"</pre>");   
    // #todo grouper par année : releasedDateY_i
    // puis grouper par docType_s
}

// Call the async function to fetch and log the data
create_publications_div();