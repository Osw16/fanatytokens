
// const metaverseList = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=100&page=1&sparkline=false'
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=fan-token&order=market_cap_desc&per_page=100&page=1&sparkline=false'


async function getLALIGA_TEAMS(){
    const getLALIGA_TEAMS = await fetch(url)
    const json = await getLALIGA_TEAMS.json()
    const data = json.filter(team => team.symbol === "bar" || 
    team.symbol ==="atm" || 
    team.symbol ==="lev" || 
    team.symbol ==="gal" || 
    team.symbol ==="tra" || 
    team.symbol ==="FOR" || 
    team.symbol ==="AM" || 
    team.symbol ==="vcf")
    return data
    
}
async function getSERIEA_TEAMS(){
    const getSERIEA_TEAMS = await fetch(url)
    const json = await getSERIEA_TEAMS.json()
    const data = json.filter(team => team.symbol === "city" || 
    team.symbol ==="AFC" || 
    team.symbol ==="efc")
    return data
    
}
async function getEPL_TEAMS(){
    const getEPL_TEAMS = await fetch(url)
    const json = await getEPL_TEAMS.json()
    const data = json.filter(team => team.symbol === "juv" || 
    team.symbol ==="acm" || 
    team.symbol ==="nov" || 
    team.symbol ==="inter" || 
    team.symbol ==="asr")
    return data
    
}
async function getCONMEBOL_TEAMS(){
    const getCONMEBOL_TEAMS = await fetch(url)
    const json = await getCONMEBOL_TEAMS.json()
    const data = json.filter(team => team.symbol === "UCH" || 
    team.symbol ==="sccp" || 
    team.symbol ==="cai" || 
    team.symbol ==="spfc" || 
    team.symbol ==="mengo" || 
    team.symbol == 'arg')
    return data
    
}

export default {
    getCONMEBOL_TEAMS,
    getLALIGA_TEAMS,
    getSERIEA_TEAMS,
    getEPL_TEAMS,
}