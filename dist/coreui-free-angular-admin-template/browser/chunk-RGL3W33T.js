var l=Object.defineProperty,r=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var o=a=>{throw TypeError(a)};var k=(a,b,c)=>b in a?l(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,t=(a,b)=>{for(var c in b||={})m.call(b,c)&&k(a,c,b[c]);if(f)for(var c of f(b))n.call(b,c)&&k(a,c,b[c]);return a},u=(a,b)=>r(a,s(b));var v=(a,b)=>{var c={};for(var d in a)m.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&f)for(var d of f(a))b.indexOf(d)<0&&n.call(a,d)&&(c[d]=a[d]);return c};var w=(a,b)=>{for(var c in b)l(a,c,{get:b[c],enumerable:!0})};var i=(a,b,c)=>b.has(a)||o("Cannot "+c);var x=(a,b,c)=>(i(a,b,"read from private field"),c?c.call(a):b.get(a)),y=(a,b,c)=>b.has(a)?o("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),z=(a,b,c,d)=>(i(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),A=(a,b,c)=>(i(a,b,"access private method"),c);var B=(a,b,c)=>new Promise((d,j)=>{var p=e=>{try{g(c.next(e))}catch(h){j(h)}},q=e=>{try{g(c.throw(e))}catch(h){j(h)}},g=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,q);g((c=c.apply(a,b)).next())});export{t as a,u as b,v as c,w as d,x as e,y as f,z as g,A as h,B as i};
