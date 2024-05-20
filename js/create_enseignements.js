




function group_enseign_by_year(comms){
    const grouped =  group_list_by_filter(comms, "year")
    return dict_to_sorted_list_by_key_value(grouped)
}




async function create_enseignements_div() { 
    const enseign_by_year_sorted = group_enseign_by_year(all_enseignements);
  
    // $("#teaching").append("<pre>"+JSON.stringify(enseign_by_year_sorted,null,'\t')+"</pre>");  

    enseign_by_year_sorted.forEach(e => {
        let year = e[0];
        let enseign_per_year = e[1];
        let div_year = $('<div class="enseign_year_div"></div>');
        div_year.append('<h3 class="enseign_year">'+year+'</h3>');

        enseign_per_year.forEach(enseign => {
            

            let div_enseign = $('<ul class="enseign list-group"></ul>');
            let detail_htd = 0;
            let title_htd = enseign.title +" " + '<span class="badge text-bg-primary rounded-pill">'+enseign.HTD+' HTD</span>'
            // <li class="list-group-item d-flex justify-content-between align-items-center">
            //     A list item
            //     <span class="badge text-bg-primary rounded-pill">14</span>
            // </li>


            div_enseign.append('<p class = "enseign_title">'+ title_htd +'</p>');
            div_enseign.append('<i class = "enseign_where">'+ enseign.study_year+", "+enseign.where +'</i>'); 
            // div_comm.append('<p class = "comm_where">'+ comm.where +'</p>'); 
            // div_comm.append('<p class = "comm_where">'+ formatted_date +'</p>');
            div_year.append(div_enseign);
        });

        $("#teaching").append(div_year);
    });

}

// Call the async function to fetch and log the data
create_enseignements_div();