 export function formatCurrency(value: string) {
   const num = Number(value.replace(/[^\d.]/g, ''));
   return `₦${num.toLocaleString()}`;
 }
