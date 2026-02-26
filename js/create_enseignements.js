




function group_enseign_by_year(comms){
    const grouped =  group_list_by_filter(comms, "year")
    return dict_to_sorted_list_by_key_value(grouped)
}




async function create_enseignements_div() { 
    const enseign_by_year_sorted = group_enseign_by_year(all_enseignements);
  
    // $("#teaching").append("<pre>"+JSON.stringify(enseign_by_year_sorted,null,'\t')+"</pre>");  

    enseign_by_year_sorted.forEach(e => {
        let year = parseInt(e[0]);
        let year_plus_one = year+1;
        let enseign_per_year = e[1];
        let div_year = $('<div class="enseign_year_div"></div>');
        div_year.append('<h5 class="enseign_year mt-3">'+year+'-'+year_plus_one+'</h5>');

        enseign_per_year.forEach(enseign => {
            
            let div_enseign = $('<div class="enseign  mt-2"></div>');
            const pill_total_htd =  '<span class="badge text-bg-primary rounded-pill">'+enseign.HTD+' HTD</span>';
            
            let htd_details_list  = Object.entries(enseign.heures).filter(
                ([key, value]) => value !== 0);
            let htd_details = ""
            htd_details_list.forEach( ([key, value]) =>{
                htd_details += "" + key + ": " + value + ", "; 
            })
            htd_details = htd_details.slice(0, -2);
            if (htd_details.length != 0){
                htd_details = "(" + htd_details + ") "
            }
 
            enseign_title = '<span class = "enseign_title mb-0">'+ enseign.title +'</span>'
            enseign_htd   = '<span style="display:inline" class = "enseign_htd">'+ htd_details + pill_total_htd + '</span>'
            enseign_where = '<i style="display:inline" class = "enseign_where">'+ enseign.study_year+", "+enseign.where +'</i>'
            
            enseign_content = enseign_title + ", " + enseign_where + " " + enseign_htd 

            div_enseign.append(enseign_content);  
            div_year.append(div_enseign);
        });

        $("#teaching").append(div_year);
    });

}

// Call the async function to fetch and log the data
create_enseignements_div();