import introduce from './introduce';

console.log('index.jsから実行しています！');
introduce();

const info = { age: 56, sports: 'VRボクシング' };
const newInfo = { ...info, address: '東京都いなか市' };
console.table(newInfo);