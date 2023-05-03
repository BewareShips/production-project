import { Profile } from '../../types/profile';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
