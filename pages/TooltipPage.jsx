import React from 'react';
import Tooltip from '../components/Tooltip/Tooltip';
import { FaArchive, FaBell, FaBed, FaBatteryQuarter } from "react-icons/fa";


export default function TooltipPage() {
    return (
        <div className="page">
            <h1 className="page-header">Tooltips</h1>
            <div className="tooltips-grid">
                <h2 className="page-label-col">Bold</h2>
                <h2 className="page-label-col">Light</h2>
                <Tooltip
                    icon={<FaArchive />}
                    variant="bold"
                    color="black"
                    title="Archive notes"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaArchive />}
                    variant="light"
                    color="black"
                    title="Archive notes"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBed />}
                    variant="bold"
                    color="blue"
                    title="Sleep Mode"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBed />}
                    variant="light"
                    color="blue"
                    title="Sleep Mode"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBatteryQuarter />}
                    variant="bold"
                    color="pink"
                    title="Low Battery"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBatteryQuarter />}
                    variant="light"
                    color="pink"
                    title="Low Battery"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBell />}
                    variant="bold"
                    color="green"
                    title="Reminder"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
                <Tooltip
                    icon={<FaBell />}
                    variant="light"
                    color="green"
                    title="Reminder"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Tooltip>
            </div>
        </div>
    )
}