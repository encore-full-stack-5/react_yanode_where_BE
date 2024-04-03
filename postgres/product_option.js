const pg = require('./pg_query_modul');


exports.getOptionsByGDS_ID = (gds_id) =>{
    return pg.getQuery("", [])
}


exports.getAvailableOptionsByGDS_ID = (gds_id) =>{
    return pg.getQuery("", [])
}


exports.updateOptionByOPTION_ID = (option_id) =>{
    return pg.updateQuery("", [])
}


exports.disalbeOptionByOPTION_ID = (option_id) =>{
    return pg.updateQuery("", [])
}
