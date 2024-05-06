export const timestampToTime = (timestamp: number) => {
   const date = new Date(timestamp * 1000);
   date.setHours(date.getHours() - 3);
   return date.toLocaleTimeString("ru-RU", {
      hour: "numeric",
      minute: "numeric",
   });
};
