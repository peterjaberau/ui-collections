import React from "react";


import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

function ShowCasesTabView() {
    const links = [
        {
            title: "ui-canvas",
            icon: (
              <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "antd",
            icon: (
              <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

    ];

}

export default ShowCasesTabView;

