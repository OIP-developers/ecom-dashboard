// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import category from 'src/store/apps/category'

import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from 'src/store/apps/category/rtk'

export const store = configureStore({
  reducer: {
    // report,
    // assignment,
    // project,
    category,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(pokemonApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// export interface Redux {
  // getState: typeof store.getState
  // dispatch: Dispatch<any>
// }

// export const createAppAsyncThunk = createAsyncThunk.withTypes<{
//   state: RootState
//   dispatch: Dispatch<any>
//   rejectValue: string
//   extra: { s: string; n: number }
// }>()
