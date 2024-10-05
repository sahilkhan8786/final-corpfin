import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "1. How is my personal information protected?",
            content: `Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.`,
        },
        {
            title: "2. How is my account protected?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: <h1 className="text-[34px font-medium]">

                "3. Do you share my information with third parties?"
            </h1>,
            content: `Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.`,
        },
        {
            title: "4. How can I report a security concern?",
            content: <p>Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.</p>,
        },
        {
            title: "5. Are online transactions and payments secure?",
            content: <p>Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "Black",
    rowContentColor: '#3B3B3B',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const FAQCARDS = () => {
    return (
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
    )
}

export default FAQCARDS