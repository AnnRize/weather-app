import{g as p,u as h,W as y}from"./getTemp-Dg8oheCi.js";import{d as c,c as i,a as r,t,n as s,u as a,o,_ as d,b as w,e as f,f as g}from"./index-CAHG3qr3.js";const $=["src","alt","title"],W={inheritAttrs:!1},z=c({...W,__name:"WeatherCard",props:{weather:{}},setup(l){return(e,n)=>(o(),i("div",{class:s(e.$style.card)},[r("div",{class:s(e.$style.city)},t(e.weather.name),3),r("div",{class:s(e.$style.tempWrapper)},[r("p",{class:s(e.$style.temp)},t(a(p)(e.weather.main.temp))+"°",3),r("div",{class:s(e.$style.imgWrapper)},[r("img",{src:`https://openweathermap.org/img/wn/${e.weather.weather[0].icon}@2x.png`,alt:e.weather.weather[0].description,title:e.weather.weather[0].description},null,8,$)],2),r("div",{class:s(e.$style.descriptionWrapper)},[r("p",{class:s(e.$style.description)},t(e.weather.weather[0].description),3),r("p",{class:s(e.$style.feelsLike)}," Ощущается как "+t(a(p)(e.weather.main.feels_like))+"° ",3)],2)],2),r("div",{class:s(e.$style.weatherWrapper)},[r("p",{class:s(e.$style.wind)},t(e.weather.wind.speed)+" м/с",3),r("p",{class:s(e.$style.humidity)},t(e.weather.main.humidity)+"%",3),r("p",{class:s(e.$style.pressure)},t(e.weather.main.pressure)+" мм рт.ст.",3),r("p",{class:s(e.$style.clouds)},t(e.weather.clouds.all)+"%",3)],2)],2))}}),v="_card_1gz4f_1",k="_city_1gz4f_11",C="_tempWrapper_1gz4f_15",L="_temp_1gz4f_15",V="_imgWrapper_1gz4f_26",M="_descriptionWrapper_1gz4f_32",S="_description_1gz4f_32",B="_feelsLike_1gz4f_39",E="_weatherWrapper_1gz4f_42",N="_wind_1gz4f_47",b="_humidity_1gz4f_63",q="_pressure_1gz4f_79",H="_clouds_1gz4f_95",I={card:v,city:k,tempWrapper:C,temp:L,imgWrapper:V,descriptionWrapper:M,description:S,feelsLike:B,weatherWrapper:E,wind:N,humidity:b,pressure:q,clouds:H},A={$style:I},D=d(z,[["__cssModules",A],["__scopeId","data-v-b66acd95"]]),F={key:0},K={key:1},Q=c({__name:"HomeView",setup(l){const{coordsStore:{coordinates:e}}=w(),{data:n,isLoading:_,isError:m}=h({queryKey:["current",e],queryFn:async()=>await y.getCurrent(e.latitude,e.longitude)});return(u,J)=>a(_)?(o(),i("div",F,"Loading...")):a(m)?(o(),i("div",K,"Error")):a(n)?(o(),i("div",{key:2,class:s(u.$style.container)},[f(D,{weather:a(n)},null,8,["weather"])],2)):g("",!0)}}),T="_container_14uem_1",j={container:T},G={$style:j},R=d(Q,[["__cssModules",G],["__scopeId","data-v-2805c0f2"]]);export{R as default};
