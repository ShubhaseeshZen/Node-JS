const encoder = new TextEncoder();
const e = encoder.encode('Karnataka');
// console.log(e);
for (let i = 0; i < e.length; i++) {
    console.log(String.fromCharCode(e[i]))
}