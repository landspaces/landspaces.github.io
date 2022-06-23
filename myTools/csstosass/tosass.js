
// import useStyles from './data.js'

// 下划线转换驼峰
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
  // 驼峰处理
function sortFieldMatch (val) {
    return val.replace(/([A-Z])/g,"-$1").toLowerCase();
};
// 属性的数组对象转对象包
function getAssignObj(obj) {
    let res = {};
    obj.map((ite) => {
        ite && Object.assign(res, ite)
    })
    return res
}
// stringify 处理结果
const stringifyCssObjFn = (cssObj) => {
    let stringifyData = JSON.stringify(cssObj)
    .replace(/"/g, '')
    .replace(/,/g, ';')
    .replace(/:{/g, '{')
    .replace(/};/g, '}')
    .replace(/##/g, ',')// 还原value的逗号，例如rgba(0, 102, 255, 0.22)
    .replace(/@@/g, ',')// 还原key的逗号，例如‘&::hover, &::hover'
    .substring(1).slice(0, -1) // 去掉首位末位{}
    return stringifyData
}
// 获取属性的数组对象
const getCssKeyValueFn = (item) => Object.entries(item[1]).map(ite => {
    // 如果发现属性是对象就去递归
    const isObjForCssValue = Object.prototype.toString.call(ite[1]) === '[object Object]';
    const diguiData = isObjForCssValue && getCssKeyValueFn([`${ite[0]}`, ite[1]])
    // 驼峰改为xxx-xxx
    ite[0] = sortFieldMatch(ite[0])
    const matchKey = [
    'font-weight',
    'z-index',
    'opacity',
    'flex-grow',
    'flex-shrink',
    'flex',
    ].some((k) => ite[0] === k);
    // 匹配到 或者 string 不加px
    ite[1] = matchKey || isNaN(ite[1]) || ite[1] === 0 ? `${ite[1]}` : `${ite[1]}px`;
    // 属性的值带有逗号暂时替换为##
    ite[1] = ite[1].replace(/,/g, '##');
    // 属性是对象，递归结果赋值
    if (isObjForCssValue) {
        ite[0] = `.${ite[0]}`
        ite[0] = ite[0].replace(/.&/g, '&').replace(/,/g, '@@');
        ite[1] = getAssignObj(diguiData)
    }
    return {[`${ite[0]}`]:ite[1]}
})
export default function getJsToSassStringFn(val) {
    const getCssObj = Object.entries(val).map(item => {
        return {[`.${item[0]}`]: getAssignObj(getCssKeyValueFn(item))}
    })
    console.log('获取处理好的数据包', getAssignObj(getCssObj));
    return stringifyCssObjFn(getAssignObj(getCssObj))
}
// console.log('js原始对象', useStyles);
// console.log(getJsToSassStringFn(JSON.parse(useStyles)))
