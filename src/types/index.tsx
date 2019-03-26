export interface StoreState {
  items: { id: number; message: string }[];
  isLoading: boolean;
  error: string | null;
}

//////////////////////////////////

// export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
// export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

// export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";
// export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

// let userTestStatus: { id: number, name: string }[] = [
//   { "id": 0, "name": "Available" },
//   { "id": 1, "name": "Ready" },
//   { "id": 2, "name": "Started" }
// ];

// {
//   items: [
//     {
//       id: 1,
//       message: 'I am list item 1'
//     },
//     {
//       id: 2,
//       message: 'I am list item 2'
//     },
//     {
//       id: 3,
//       message: 'I am list item 3'
//     }
//   ],
//   isLoading: false,
//   error: null
// }
