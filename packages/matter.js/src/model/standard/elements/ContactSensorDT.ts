/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType",
    name: "ContactSensor",
    id: 0x15,
    classification: "simple",

    children: [
        {
            tag: "requirement",
            name: "Descriptor",
            id: 0x1d,
            element: "serverCluster",

            children: [
                {
                    tag: "datatype",
                    name: "DeviceTypeStruct",
                    type: "struct",
                    children: [
                        { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 21 },
                        { tag: "datatype", name: "Revision", type: "uint16", default: 1 },
                    ],
                },
            ],
        },

        {
            tag: "requirement",
            name: "Identify",
            id: 0x3,
            element: "serverCluster",
            xref: { document: "device", section: "7.1.4" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }],
        },
        {
            tag: "requirement",
            name: "BooleanState",
            id: 0x45,
            element: "serverCluster",
            xref: { document: "device", section: "7.1.4" },
        },
    ],
});
