import{u as h,W as m}from"./weather.service-qyPcLngz.js";import{d as c,c as n,a as r,t,n as s,o as i,_ as p,u as a,b as u,e as y}from"./index-DgestkIl.js";const w=["src","alt","title"],$={inheritAttrs:!1},W=c({...$,__name:"WeatherCard",props:{weather:{}},setup(d){return(e,o)=>(i(),n("div",{class:s(e.$style.card)},[r("div",{class:s(e.$style.city)},t(e.weather.name),3),r("div",{class:s(e.$style.tempWrapper)},[r("p",{class:s(e.$style.temp)},t(Math.round(e.weather.main.temp))+"°",3),r("div",{class:s(e.$style.imgWrapper)},[r("img",{src:`https://openweathermap.org/img/wn/${e.weather.weather[0].icon}@2x.png`,alt:e.weather.weather[0].description,title:e.weather.weather[0].description},null,8,w)],2),r("div",{class:s(e.$style.descriptionWrapper)},[r("p",{class:s(e.$style.description)},t(e.weather.weather[0].description),3),r("p",{class:s(e.$style.feelsLike)}," Ощущается как "+t(Math.round(e.weather.main.feels_like))+"° ",3)],2)],2),r("div",{class:s(e.$style.weatherWrapper)},[r("p",{class:s(e.$style.wind)},t(e.weather.wind.speed)+" м/с",3),r("p",{class:s(e.$style.humidity)},t(e.weather.main.humidity)+"%",3),r("p",{class:s(e.$style.pressure)},t(e.weather.main.pressure)+" мм рт.ст.",3),r("p",{class:s(e.$style.clouds)},t(e.weather.clouds.all)+"%",3)],2)],2))}}),f="_card_94ecn_1",g="_city_94ecn_9",v="_tempWrapper_94ecn_13",k="_temp_94ecn_13",C="_imgWrapper_94ecn_23",L="_descriptionWrapper_94ecn_29",M="_description_94ecn_29",V="_feelsLike_94ecn_36",B="_weatherWrapper_94ecn_39",E="_wind_94ecn_44",N="_humidity_94ecn_60",b="_pressure_94ecn_76",q="_clouds_94ecn_92",H={card:f,city:g,tempWrapper:v,temp:k,imgWrapper:C,descriptionWrapper:L,description:M,feelsLike:V,weatherWrapper:B,wind:E,humidity:N,pressure:b,clouds:q},I={$style:H},S=p(W,[["__cssModules",I],["__scopeId","data-v-33c9d515"]]),z={key:0},A={key:1},D=c({__name:"HomeView",setup(d){const{data:e,isLoading:o,isError:l}=h({queryKey:["current"],queryFn:async()=>await m.getCurrent()});return(_,j)=>a(o)?(i(),n("div",z,"Loading...")):a(l)?(i(),n("div",A,"Error")):a(e)?(i(),n("div",{key:2,class:s(_.$style.container)},[u(S,{weather:a(e)},null,8,["weather"])],2)):y("",!0)}}),F="_container_1a98c_1",K={container:F},Q={$style:K},O=p(D,[["__cssModules",Q],["__scopeId","data-v-03b2955d"]]);export{O as default};
