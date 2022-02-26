import React, { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";
import boardData from '../assets/test_data/board_data.js';

function Board(){

    useEffect(()=> {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
        }
    },[]);

    let [mainData, setMainData] = useState(boardData);

    return (
        <>
            <div className="bg-white p-8 rounded-md w-full">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h1 className="text-gray-600 font-bold text-2xl">Coding Youtubers</h1>
                        {/* <span className="text-xs">All products item</span> */}
                    </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
                    </div>
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <button 
                            className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                            onClick={() => {
                                window.open("https://github.com/jaeykweon/coding-youtubers-front", "_blank", "noopener");
                              }}
                        >
                            유튜버 추가 요청
                        </button>
                        {/* <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button> */}
                    </div>
                </div>
            </div>

            <div className="flex text-center justify-center">
                <div className="w-2/3  -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                                        Channel
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Tags
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Playlists
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Lastest Upload
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        # of subscriber
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        mainData.map((each,i)=> {
                                            return (
                                                <tr className="">
                                                    <td className="w-10 px-2 py-2 border-b-2 border-gray-200 bg-white">
                                                        <div className="grid grid-cols-1 gap-4 place-items-center">
                                                            <div className="w-10 h-10">
                                                                <img 
                                                                    className="w-full h-full rounded-full"
                                                                    src={each.profileImage}
                                                                    alt={each.name} 
                                                                />
                                                            </div>
                                                            <div className="text-gray-900 font-bold ">
                                                                <h3>
                                                                    {each.name}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    
                                                    <td className="w-1/5 px-5 py-5 border-b-2 border-gray-200 bg-white text-sm">
                                                        <div className="flex-wrap items-center">
                                                            {each.tags}
                                                        </div>
                                                    </td>

                                                    <td className="w-96 px-5 py-5 border-b-2 border-gray-200 bg-white text-sm">
                                                        {
                                                            each.videos.map((video)=> 
                                                                {
                                                                    return (
                                                                        <>
                                                                            <p 
                                                                                className="my-2 text-gray-900 whitespace-no-wrap"
                                                                                data-tip data-for={video.title}
                                                                                >
                                                                                <a 
                                                                                    href={video.url}
                                                                                    target="_blank"
                                                                                    rel="noreferrer noopener"
                                                                                    >
                                                                                    {video.title}
                                                                                </a>
                                                                            </p>

                                                                        <ReactTooltip id={video.title} place="top" effect="solid">
                                                                            <img src={video.thumbnail}></img>
                                                                        </ReactTooltip>
                                                                      </>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </td>

                                                    <td className="w-12 px-5 py-5 border-b-2 border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            2022-02-20T04:30
                                                        </p>
                                                    </td>

                                                    <td className="w-12 px-5 py-5 border-b-2 border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {each.subscriberCount}
                                                        </p>
                                                        {/* <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span className="relative">Activo</span>
                                                        </span> */}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                    
                            </tbody>
                        </table>
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Board;