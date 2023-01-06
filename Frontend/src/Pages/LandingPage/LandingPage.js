import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import { getData } from "../../Redux/Slices";
import ReactPaginate from "react-paginate";
import bannerImg from "../../assets/images/banner-bg.png"
import { Select } from "../../Components/SelectInput/Select";
import Toggle from "../../Components/ToggleShow/Toggle";
import Header from "../../Components/Header/Header";
import { imageData } from "../../Utils/ImageData";



export default function LandingPage() {
    const dispatch = useDispatch();
    const { getUser, isGetDataLoading } = useSelector((state) => state.reducer);
    const [spaceStatus, setSpaceStatus] = useState('')
    const [spaceType, setSpaceType] = useState('')
    const [originalLaunch, setOriginalLaunch] = useState('')
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [showToggle, setShoeToggle] = useState(false)
    const [showToggleData, setShoeToggleData] = useState({})

    useEffect(() => {
        getSpaceList()
    }, [page]);

    useEffect(() => {
        const itemPerPage = getUser?.campaign?.per_page
        const pageLength = getUser?.campaign?.total_count
        setPageCount(Math.ceil(pageLength / itemPerPage));
    }, [getUser]);

    const getSpaceList = () => {
        const payload = {
            page,
            status: spaceStatus,
            type: spaceType,
            launch_date: originalLaunch
        }
        dispatch(getData(payload));
    }

    const handlePageClick = (event) => {
        const pageNum = event.selected + 1;
        setPage(pageNum);
    };

    const searchByFilter = (event) => {
        event.preventDefault()
        getSpaceList()
    };

    const toggleOpen = (data) => {
        setShoeToggleData(data)
        setShoeToggle(!showToggle)
    }

    return (
        <>
            <Header />
            <div className="bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex flex-col p-4 md:flex-row items-strech justify-between py-12 md:p-4 xl:p-0">
                        <div className="flex flex-col items-center md:items-start justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">SpaceX Data</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">Space x Data </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src={bannerImg} alt="banner-img" className="max-w-full md:max-w-sm p-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto rounded mb-0 pt-6 pb-8 md:mb-4 md:p-4 p-4">
                <form onSubmit={searchByFilter} className="container mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <div className="mb-4">
                                <Select
                                    className="shadow bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    labelId="status_spaceStatus"
                                    id={'spaceStatus'}
                                    name={'spaceStatus'}
                                    label={'Filter by Status'}
                                    value={spaceStatus}
                                    onChange={(e) => setSpaceStatus(e.target.value)}
                                    options={getUser?.status_options?.map((ele) => ele.status)}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="mb-4">
                                <Select
                                    className="shadow bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    labelId="status_spaceType"
                                    id={'spaceType'}
                                    name={'spaceType'}
                                    label={'Filter by Type'}
                                    value={spaceType}
                                    onChange={(e) => setSpaceType(e.target.value)}
                                    options={getUser?.type_options?.map((ele) => ele.type)}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="mb-4">
                                <Select
                                    className="shadow bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    labelId="status_spaceOriginLaunch"
                                    id={'spaceOriginLaunch'}
                                    name={'spaceOriginLaunch'}
                                    label={'Filter By Original Launch'}
                                    value={originalLaunch}
                                    onChange={(e) => setOriginalLaunch(e.target.value)}
                                    options={getUser?.original_launch_options?.map((ele) => ele.original_launch)}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="mb-4">
                                <button
                                    className=" mt-7 shadow bg-black border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    type='submit'>Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                        {getUser &&
                            getUser?.campaign?.data?.map((ele, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <div onClick={() => toggleOpen(ele)} className="max-w-sm rounded overflow-hidden shadow-lg">
                                                <div className="space-card-img w-full h-60">
                                                    <img className="w-full h-full object-cover" src={imageData && imageData[i].url} alt="card-img" />
                                                </div>
                                                <div className="p-2 md:p-4 md:pb-0">
                                                    <div className="font-bold text-sm mb-0 md:text-xl">{ele.capsule_serial}</div>
                                                </div>
                                                <div className="px-2 md:p-3 pt-0 ">
                                                    <span className="inline-block bg-gray-200 rounded-full px-2 md:px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">{ele.status}</span>
                                                    <span className="inline-block bg-gray-200 rounded-full px-2 md:px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">{ele.type}</span>
                                                    <span className="inline-block bg-gray-200 rounded-full px-2 md:px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">{ele.original_launch}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="pagination-wrapper">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={'next'}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={'previous'}
                        />
                    </div>
                </div>
            </div>
            <Toggle showToggle={showToggle} showToggleData={showToggleData} toggleOpen={toggleOpen} />
        </>
    );
}
