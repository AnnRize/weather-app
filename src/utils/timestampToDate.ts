export const timestampToDate = (timestamp: number) => {
   const date = new Date(timestamp * 1000);
   date.setHours(date.getHours() - 3);
   return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
   });
};
