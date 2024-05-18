
function group_list_by_filter(list,filter){
    let res = {};
    list.forEach(p => {
        const key = p[filter]; 
        if (!(key in res)) {
            res[key] = [];
        }; 
        res[key].push(p);       
    });
    return res;
}
 
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}