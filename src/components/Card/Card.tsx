import React from 'react'
export interface Icard {
    tittle: string;
    colorIcon: string;
    quantity: any,
    description: string
}
const Card = (result: Icard) => {
    const {tittle, colorIcon, quantity, description} = result
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            {/* <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5> */}
                            <span className="font-semibold text-xl text-blueGray-700">
                                {tittle ? 'hola' : 'ull'}
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    colorIcon
                                }
                            >
                                {/* <i className={statIconName}></i> */}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                        <span className=" mr-2">
                            {/* <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "} */}
                            {quantity ? quantity : ''}
                        </span>
                        <span className="whitespace-nowrap">{description}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card