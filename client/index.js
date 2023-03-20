console.log(" 🎉 Client Server working powered by Webpackpack 🎉");

let show = (msg="No message given") => {
    console.log(msg)
}

show();

function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000)
    })
}

async function asyncCall(){
    console.log("Calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();