import React, { useEffect } from 'react';

function Board(){

    useEffect(()=> {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
        }
    },[])

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
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
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
                                        Img
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
                                <tr className="">
                                    <td className="w-10 px-2 py-2 border-gray-200 bg-white text-sm">
                                        <div className="w-10 h-10">
                                            <img 
                                                className="w-full h-full rounded-full"
                                                src="https://yt3.ggpht.com/ytc/AKedOLS6RbbzFGvzu_XoKkP17KPrwnej1YvIWw-aTsdm=s88-c-k-c0x00ffffff-no-rj"
                                                alt="" 
                                            />
                                        </div>
                                    </td>
                                    <td className="text-center max-w-1/5 px-2 py-2 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            동빈 나
                                        </p>
                                    </td>
                                    
                                    <td className="w-1/5 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex-wrap items-center">
                                            #python, #AI, #알고리즘,#python, #AI, #알고리즘,#python, #AI, #알고리즘,#python, #AI, #알고리즘,#python, #AI, #알고리즘,#python, #AI, #알고리즘,#python, #AI, #알고리즘,
                                        </div>
                                    </td>
                                    <td className="w-96 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="my-2 text-gray-900 whitespace-no-wrap">
                                            (이코테 2021) 이것이 취업을 위한 코딩 테스트다 with 파이썬
                                        </p>
                                        <p className="my-2 text-gray-900 whitespace-no-wrap">
                                            꼼꼼한 딥러닝 논문 리뷰와 코드 실습(Deep Learning Paper Review and Practice)
                                        </p>
                                        <p className="my-2 text-gray-900 whitespace-no-wrap">
                                            [라이브 강의] 이것이 취업을 위한 코딩 테스트다 with Python
                                        </p>
                                        <p className="my-2 text-gray-900 whitespace-no-wrap">
                                            청춘 갈아넣기
                                        </p>
                                        <p className="my-2 text-gray-900 whitespace-no-wrap">
                                            코딩 테스트 & 알고리즘 대회 핵심 노트
                                        </p>
                                    </td>
                                    <td className="w-12 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            2022-02-20T04:30
                                        </p>
                                    </td>
                                    <td className="w-12 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            148000
                                        </p>
                                        {/* <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative">Activo</span>
                                        </span> */}
                                    </td>
                                </tr>

                                
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