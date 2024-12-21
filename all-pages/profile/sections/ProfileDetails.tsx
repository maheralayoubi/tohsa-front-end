import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProfileDetails {
    data: Profile
}

const ProfileDetails: React.FC<IProfileDetails> = ({ data }) => {
    return (
        <section className="py-10 lg:py-32 px-5 space-y-10 lg:space-y-10 text-[#111118] max-w-5xl mx-auto text-xs lg:text-2xl font-normal">

            <div className="flex items-start justify-center gap-2 lg:gap-10 flex-col lg:flex-row">
                <div className="relative lg:w-[400px] lg:h-[400px] w-full aspect-square">
                    <Image src={data?.image} alt={data?.userName} fill className=" object-cover" />
                </div>
                <div className="flex-1 lg:space-y-5 space-y-2">
                    <h1 className="text-xl lg:text-[40px] font-bold">{data?.userName}</h1>
                    <span className="text-[#484848] block ">{data?.work}</span>
                    <p className="text-[#484848] ">{data?.shortDiscription}</p>
                </div>
            </div>

            {/* Biography */}
            <div className=" space-y-2 lg:space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">Biography</h2>
                {data.biography?.split("\n").map((item, index) =>
                    <p key={index}>{item}</p>
                )}
            </div>

            {/* Contact Details */}
            <div className="space-y-2 lg:space-y-5">
                <h2 className="font-bold text-base lg:text-4xl">Contact Details</h2>
                <Link href={`mailto:${data?.contact?.email}`} className="text-[#00A7D3] block">{data?.contact?.email}</Link>
                <div className="flex items-center justify-start gap-5">
                    <Link href={data?.contact?.twitter}>
                        <Image src="/images/icons/x.svg" alt="x" width={24} height={24} />
                    </Link>
                    <Link href={data?.contact?.facebook}>
                        <Image src="/images/icons/facebook.svg" alt="facebook" width={24} height={24} />
                    </Link>
                    <Link href={data?.contact?.linkedin}>
                        <Image src="/images/icons/linkedin.svg" alt="linkedin" width={24} height={24} />
                    </Link>
                </div>
            </div>

        </section>
    )
};

export default ProfileDetails;
