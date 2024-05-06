export const getTemp = (temp: number) => {
   const result = Math.round(temp);

   if (result > 0) {
      return "+" + result;
   } else {
      return result;
   }
};
