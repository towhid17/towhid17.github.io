// export function NavBrand() {
//   return (
//     <a 
//       href="#" 
//       className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-0"
//     >
//       Towhid
//     </a>
//   );
// }

import { User } from "lucide-react";

export function NavBrand() {
  return (
    <a 
      href="#" 
      className="flex items-center gap-2 text-2xl font-extrabold tracking-wide transition-all duration-300 
                 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent 
                 hover:scale-105 hover:brightness-110"
    >
      {/* <User className="w-5 h-5 text-blue-400" /> */}
      Towhid
    </a>
  );
}
