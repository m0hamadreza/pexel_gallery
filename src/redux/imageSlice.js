import { createSlice,createAsyncThunk, } from '@reduxjs/toolkit'
import axiosInstance from '../axios/instance'

const initialState = {
  images:[],
  searchImages:[],
  searchValue:"",
  page:1,
  isLoading:true
}

export const fetchImages = createAsyncThunk(
  'Images',
  
  async (page) => {
    const res = await axiosInstance.get(`https://api.pexels.com/v1/curated?page=${page}&per_page=20`)

    const data = await res.data
    return data.photos
  }
)
export const fetchSearchImages = createAsyncThunk(
  'searchImages',
  
  async (search) => {
    const res = await axiosInstance.get(`https://api.pexels.com/v1/search?query=${search}&per_page=20`)
    const data = await res.data
    return data.photos
  }
)

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setPage:(state, action)=>{
     
        state.page += 1

    },
    setSearchValue:(state, action)=>{
     
      state.searchValue = action.payload

  },
  clearSearchImages:(state,)=>{
     
    state.searchImages = []

},
    
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      // state.isLoading = true
    })
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      
      state.isLoading = false
      state.images = [...state.images,...action.payload]
    })
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
      builder.addCase(fetchSearchImages.pending, (state) => {
      // state.isLoading = true
    })
    builder.addCase(fetchSearchImages.fulfilled, (state, action) => {
      

      state.isLoading = false
      state.searchImages = [...action.payload]
    })
    builder.addCase(fetchSearchImages.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },


})

// Action creators are generated for each case reducer function
export const {setPage,setSearchValue,clearSearchImages } = imageSlice.actions

export default imageSlice.reducer