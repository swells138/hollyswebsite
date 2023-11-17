import React from 'react';
import Link from 'next/link';
import logo from '../../public/hslogo.png';
import Image from 'next/image';
const Resume = () => {
    return (
        <div className="hero-container h-screen bg-gray-100 p-6">
            <Link href="/">
                <Image src={logo} alt="Logo" width={50} height={50} />
            </Link>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <p className="text-lg mb-4">
                        A dedicated and experienced professional who balances the necessity of protecting people and
                        property with the need to maintain good relationships with customers and the public. Capable
                        of effective communication and comfortable exercising initiative and problem solving.
                    </p>
                </div>

                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-3">Education</h1>
                    <ul className="list-disc pl-5">
                        <li>
                            <h2 className="text-xl font-medium">
                                Limestone University
                            </h2>
                            <p>Bachelor of Social Work 2022</p>
                        </li>
                        <li>
                            <h2 className="text-xl font-medium">
                                Olympic College
                            </h2>
                            <p>Associate of Arts 2021</p>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-3">Employment</h1>
                    <ul className="list-disc pl-5">
                        <li>
                            <h2 className="text-xl font-medium">
                                SC DEPARTMENT OF JUVENILE JUSTICE
                            </h2>
                            <p>Community Specialist - Gaffney, South Carolina Aug. 2022 - Current</p>
                        </li>
                        <li>
                            <h2 className="text-xl font-medium">
                                UNITED STATES NAVY
                            </h2>
                            <p>Operations Specialist - Everett, Washington May 2017 - Oct. 2019</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
