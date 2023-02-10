const files = import.meta.globEager("./*/index.ts");
const langObj: any = {};
Object.keys(files).forEach((item) => {
    langObj[item.replace(/\.\/|\/index.ts/g, "")] = files[item].default
});
export default langObj;
