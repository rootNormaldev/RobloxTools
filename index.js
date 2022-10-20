import boxen from 'boxen'; 
import gradient from 'gradient-string';
import Prompt from 'prompt-sync';
import noblox from 'noblox.js'
import Table from 'cli-table';
import chalk from 'chalk';
import axios from 'axios';
import fs,{existsSync} from 'node:fs'

let time = new Date();
var table = new Table();
const prompt = Prompt();
const user = fs.readFileSync('user.txt', 'UTF-8')
const user_line = user.split(/\r?\n/)

if(!existsSync('user.txt') && !existsSync('cookie.txt') && !existsSync('userid.txt')){
    console.log('File does not exist')
    process.exit(1)
}

for(let i = 0; i < user_line.length; i++){
    if((user_line[i] === '') === false){
        console.log('starting check data')
    }else{
        console.log('data error file')
        process.exit(1)
    }
}

// console.log(gradient.rainbow(boxen('Roblox Tools v 1.0.0', {title: 'root@normaldev', titleAlignment: 'center'})));
// console.log(gradient.rainbow(boxen('Donate Ltc=0x299B384188dd5e98FA05267D0Db368B49a9e13E5', {title: 'root@normaldev', titleAlignment: 'center'})));

// table.push(
//     { 'method': 'Description' },
//     { 'blockuser': 'Used to block user'}, 
//     { 'unblockuser': 'Used to unblock user'},
//     { 'checkcookies': 'Check mutiple cookies valid'},
//     { 'userinfo': 'Get user info'},
//     { 'recookies': 'Recookies muntiple accounts (not activate)'}
// );

// console.log(table.toString());
console.log(gradient.rainbow(`
┌── root@normaldev ──┐
│Roblox Tools v 1.0.0|
│Github rootNormaldev|
└────────────────────┘
┌────────────────── root@normaldev ───────────────────┐
│Donate Ltc=0x299B384188dd5e98FA05267D0Db368B49a9e13E5│
└─────────────────────────────────────────────────────┘
┌──────────────┬────────────────────────────────────────────┐
│ method       │ Description                                │
├──────────────┼────────────────────────────────────────────┤
│ blockuser    │ Used to block user                         │
├──────────────┼────────────────────────────────────────────┤
│ unblockuser  │ Used to unblock user                       │
├──────────────┼────────────────────────────────────────────┤
│ checkcookies │ Check mutiple cookies valid                │
├──────────────┼────────────────────────────────────────────┤
│ userinfo     │ Get user info                              │
├──────────────┼────────────────────────────────────────────┤
│ recookies    │ Recookies muntiple accounts (not activate) │
└──────────────┴────────────────────────────────────────────┘
`))
const method = prompt(gradient.retro('[root@normaldev]>'))
try{
if(method === 'blockuser'){
    const userid = prompt(gradient.rainbow(['root@normaldev] userid>']))
    user_line.forEach(async UserCookie =>{
    const data = fs.readFileSync('cookie.txt', 'UTF-8')
    const lines = data.split(/\r?\n/)
   const user = await noblox.setCookie(UserCookie)
        axios({
            method:'post',
            url:`https://accountsettings.roblox.com/v1/users/${userid}/block`,
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Host':'accountsettings.roblox.com',
                'origin':'https://www.roblox.com',
                'referer':'https://www.roblox.com',
                'user-agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0',
                'x-csrf-token':await noblox.getGeneralToken(),
                Cookie:'RBXEventTrackerV2=CreateDate=10/19/2022 12:35:54 AM&rbxid=3950971026&browserid=149238218395; GuestData=UserID=-2035983313; _gcl_au=1.1.543525578.1666157288; RBXSource=rbx_acquisition_time=10/19/2022 12:35:36 AM&rbx_acquisition_referrer=https://www.roblox.com/&rbx_medium=Direct&rbx_source=www.roblox.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=1; __utma=200924205.296244386.1666157738.1666167665.1666171134.3; __utmz=200924205.1666157738.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); .ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_94257552434A83B83C8D5C0A8077CDE34DD5902BD47E47591D0521C671C0F0AA9187A7731FE695518AFEFBE46676BF3878FDC6065EF51D5CDDCD79EF88F1601348A7BB5ED2D6F15A5DA0C8AD75D0BE24E46BC08E2ECDF11D2408A3AF94F15B655A37247B2C4FFCE39983DC94FD0E19B56E4945724FC4A0AA9A0D0D4149F80A0E2FCF5864AF4D7C1F090882181C5A8A3112845A69B91EF208047E2AA97D14A14BEB8FE338201B4F82DCC4D581B7F4738EB2CEEE0D0A5B8159B944BADD949B4D3338AA60B2AE2D0A127838AC399B3A0CAD674107C48A93F6306B85E26B153D7BBF22B2973AB04F3A19853D581FA8A3836DDD13C612963FA52DBB97C7F5BB8D6D80D9DF08D79C00BAF6D1F97FD512A060EE0493678F9423C8EFE76CBFD2DFF71CD9BC5E6E6E048BFE1FBA81677427145BC7045103B861445E8CAF841D8A9F1759FFD5FE75C78D3E4A168830B34C27DB825703DF44A928E6A6B0641942B514B99D0F0EA9153F7224371ABB6A29EA60A532BAA087EF6C; RBXSessionTracker=sessionid=cbb03f67-3367-4046-872c-36a10926c541; __utmc=200924205; __utmb=200924205.0.10.1666171134'
            }
        }).then(res => {
            if(res.status == 200){
                console.log(`${user.UserName}:[${chalk.green('success')}]`);
            }else{
                console.log(`${user.UserName}:[${chalk.red('error')}]`);
            }
        })
        .catch(err => console.log(err.response.data))
    })
    //console.log(block)
}else if(method === 'unblockuser'){
    user_line.forEach(async UserCookie =>{
    const data = fs.readFileSync('cookie.txt', 'UTF-8')
    const lines = data.split(/\r?\n/)
   const user = await noblox.setCookie(UserCookie)
   const userid = prompt(['root@normaldev] userid>'])
   axios({
        method:'post',
        url:`https://accountsettings.roblox.com/v1/users/${userid}/unblock`,
        withCredentials: true,
        headers:{
            'Content-Type': 'application/json',
            'Host':'accountsettings.roblox.com',
            'origin':'https://www.roblox.com',
            'referer':'https://www.roblox.com',
            'user-agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0',
            'x-csrf-token':await noblox.getGeneralToken(),
            Cookie:'RBXEventTrackerV2=CreateDate=10/19/2022 12:35:54 AM&rbxid=3950971026&browserid=149238218395; GuestData=UserID=-2035983313; _gcl_au=1.1.543525578.1666157288; RBXSource=rbx_acquisition_time=10/19/2022 12:35:36 AM&rbx_acquisition_referrer=https://www.roblox.com/&rbx_medium=Direct&rbx_source=www.roblox.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=1; __utma=200924205.296244386.1666157738.1666167665.1666171134.3; __utmz=200924205.1666157738.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); .ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_94257552434A83B83C8D5C0A8077CDE34DD5902BD47E47591D0521C671C0F0AA9187A7731FE695518AFEFBE46676BF3878FDC6065EF51D5CDDCD79EF88F1601348A7BB5ED2D6F15A5DA0C8AD75D0BE24E46BC08E2ECDF11D2408A3AF94F15B655A37247B2C4FFCE39983DC94FD0E19B56E4945724FC4A0AA9A0D0D4149F80A0E2FCF5864AF4D7C1F090882181C5A8A3112845A69B91EF208047E2AA97D14A14BEB8FE338201B4F82DCC4D581B7F4738EB2CEEE0D0A5B8159B944BADD949B4D3338AA60B2AE2D0A127838AC399B3A0CAD674107C48A93F6306B85E26B153D7BBF22B2973AB04F3A19853D581FA8A3836DDD13C612963FA52DBB97C7F5BB8D6D80D9DF08D79C00BAF6D1F97FD512A060EE0493678F9423C8EFE76CBFD2DFF71CD9BC5E6E6E048BFE1FBA81677427145BC7045103B861445E8CAF841D8A9F1759FFD5FE75C78D3E4A168830B34C27DB825703DF44A928E6A6B0641942B514B99D0F0EA9153F7224371ABB6A29EA60A532BAA087EF6C; RBXSessionTracker=sessionid=cbb03f67-3367-4046-872c-36a10926c541; __utmc=200924205; __utmb=200924205.0.10.1666171134'
        }
    }).then(res => {
        if(res.status == 200){
            console.log(`${user.UserName}:[${chalk.green('success')}]`);
        }else{
            console.log(`${user.UserName}:[${chalk.red('error')}]`);
        }
    })
    .catch(err => {
        if(err.response.data){
            console.log(`${user.UserName}:[${chalk.red('error')}]`);
        }
    })
    })
}else if(method === 'checkcookies'){
    const data = fs.readFileSync('user.txt', 'UTF-8')
    const lines = data.split(/\r?\n/)
    user_line.forEach(async UserCookie =>{
    const user = await noblox.setCookie(UserCookie)
    //console.log(user)
    if(user){
        fs.writeFileSync('./check_success/cookie.txt',UserCookie,{encoding:'utf8'})
        if(user.IsPremium === true){
            console.log(`${user.UserName}:[${chalk.green(`IsPremium=${user.IsPremium} RobuxBalance=${user.RobuxBalance}`)}]`)
        }else{
            console.log(`${user.UserName}:[${chalk.red(`IsPremium=${user.IsPremium} RobuxBalance=${user.RobuxBalance}`)}]`)
        }
    }else{
        console.log(chalk.red(`error`))
    }
})
}else if(method === 'userinfo'){
    //user_line.forEach(async UserCookie =>{
    // const data = fs.readFileSync('cookie.txt', 'UTF-8')
    // const lines = data.split(/\r?\n/)
    let time_str = time.toISOString().split(':')[0].split('T')[0]
    lines.forEach(async userid => {
    //const user = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_94257552434A83B83C8D5C0A8077CDE34DD5902BD47E47591D0521C671C0F0AA9187A7731FE695518AFEFBE46676BF3878FDC6065EF51D5CDDCD79EF88F1601348A7BB5ED2D6F15A5DA0C8AD75D0BE24E46BC08E2ECDF11D2408A3AF94F15B655A37247B2C4FFCE39983DC94FD0E19B56E4945724FC4A0AA9A0D0D4149F80A0E2FCF5864AF4D7C1F090882181C5A8A3112845A69B91EF208047E2AA97D14A14BEB8FE338201B4F82DCC4D581B7F4738EB2CEEE0D0A5B8159B944BADD949B4D3338AA60B2AE2D0A127838AC399B3A0CAD674107C48A93F6306B85E26B153D7BBF22B2973AB04F3A19853D581FA8A3836DDD13C612963FA52DBB97C7F5BB8D6D80D9DF08D79C00BAF6D1F97FD512A060EE0493678F9423C8EFE76CBFD2DFF71CD9BC5E6E6E048BFE1FBA81677427145BC7045103B861445E8CAF841D8A9F1759FFD5FE75C78D3E4A168830B34C27DB825703DF44A928E6A6B0641942B514B99D0F0EA9153F7224371ABB6A29EA60A532BAA087EF6C')
    axios.get(`https://users.roblox.com/v1/users/${userid}`).then(res => {
        let time_str_2 = res.data['created'].split(':')[0].split('T')[0]
        let y
        let m
        let d
        y = time_str.split('-')[0] - time_str_2.split('-')[0] //y
        m = time_str.split('-')[1] - time_str_2.split('-')[1] //m
        d = time_str.split('-')[2] - time_str_2.split('-')[2] //d
        console.log(gradient.rainbow(`${user.UserName}:[Age ${y}y/${m}m/${d}d] isBanned:${res.data['isBanned']} hasVerifiedBadge:${res.data['hasVerifiedBadge']}`))
        fs.writeFileSync('./check_success/userinfo.txt',`\r\n${user.UserName}:[Age ${y}y/${m}m/${d}d] isBanned:${res.data['isBanned']} hasVerifiedBadge:${res.data['hasVerifiedBadge']}`,{flag:'a'})
    }).catch(err => console.log(err))
})
//})
    //let time_str_2 = time_str_v.split(':')[0].split('T')[0]
    //time_str.split('-')[0] - time_str_2.split('-')[0]
}else if(method === 'recookies'){
    console.log(chalk.red('wait update...'))
}else{
    console.log(chalk.red('try again...'))
}
}catch(e){

}
