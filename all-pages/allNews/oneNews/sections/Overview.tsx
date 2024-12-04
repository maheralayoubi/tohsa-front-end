import React from "react";

// static data
import pageStaticData from "../data/pageStaticData.json"

// component
import TableRow from "./components/TableRow";

interface INewsOverview {
    data: News
}

const Overview: React.FC<INewsOverview> = ({ data }) => {
    return (
        <section className="py-10 px-5 lg:py-32 lg:px-10 max-w-[920px] text-[#111118] space-y-10 lg:space-y-20 mx-auto text-xs lg:text-2xl font-normal">
            <h2 className="text-base lg:text-3xl font-bold">{pageStaticData.overview}</h2>
            <p>{data?.content1}</p>
            <p>{data?.content2}</p>

            <table className="border-collapse border border-[#878787]">
                <tbody>
                    <TableRow rowTitle={pageStaticData.date} rowContent={data?.dateTime} />
                    <TableRow rowTitle={pageStaticData.place} rowContent={data?.place} />
                    <TableRow rowTitle={pageStaticData.rigester} rowContent={data?.rigesterFor} />
                    <TableRow rowTitle={pageStaticData.program}>
                        <ul className="list-disc px-5">
                            {
                                data?.program?.map((item1, index) =>
                                    <div key={index}>
                                        <li key={index}>{item1.content}</li>
                                        <ul className="list-disc px-5">
                                            {
                                                item1?.list && item1?.list.map((item2, index) =>
                                                    <div key={index}>
                                                        <li>{item2.content}</li>
                                                        <ul className="list-disc px-5">
                                                            {
                                                                item2?.list && item2?.list.map((item3, index) =>
                                                                    <li key={index}>{item3.content}</li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                )}
                                        </ul>
                                    </div>
                                )}
                        </ul>
                    </TableRow>
                </tbody>
            </table>
            <p>{data?.content3}</p>
        </section>
    )
};

export default Overview;
