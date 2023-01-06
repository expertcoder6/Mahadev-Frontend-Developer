import { createAsyncThunk } from "@reduxjs/toolkit";
import { callGetAPI } from "../../Service/Index";

export const getData = createAsyncThunk(
    "getData",
    async (params, { rejectWithValue }) => {
        try {
            const response = await callGetAPI({ route: `http://websitework.in/spacex_api/index.php?action=getCampaign`, params });
            return { response };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const filterData = createAsyncThunk(
    'filterUser',
    async (params, { rejectWithValue }) => {
        const queryParams = {
            page: params?.page,
            type: params?.type,
            status: params?.status,
            original_launch: params?.original_launch
        };
        try {
            const response = await callGetAPI({ route: 'http://websitework.in/spacex_api/index.php?action=getCampaign', params: queryParams });
            return { response };
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);
