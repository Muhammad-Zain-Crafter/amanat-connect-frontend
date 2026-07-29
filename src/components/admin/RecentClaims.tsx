// const RecentClaims = ({ claims }: any) => {
//   return (
//     <div className="rounded-3xl bg-white p-6 shadow-sm">

//       <h2 className="mb-6 text-xl font-bold">
//         Recent Claims
//       </h2>

//       <div className="space-y-4">

//         {claims.map((claim: any) => (
//           <div
//             key={claim._id}
//             className="flex items-center justify-between rounded-2xl border p-4 hover:bg-slate-50"
//           >
//             <div>

//               <h3 className="font-semibold">
//                 {claim.asset.title}
//               </h3>

//               <p className="text-sm text-gray-500">
//                 {claim.claimedBy.fullName}
//               </p>

//             </div>

//             <span
//               className={`rounded-full px-3 py-1 text-sm capitalize ${
//                 claim.status === "approved"
//                   ? "bg-green-100 text-green-600"
//                   : claim.status === "pending"
//                   ? "bg-yellow-100 text-yellow-700"
//                   : "bg-red-100 text-red-600"
//               }`}
//             >
//               {claim.status}
//             </span>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default RecentClaims;