"use client";

import React from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import WeeklyTimetablePDF from "./WeeklyTimetablePDF";
import { Download } from "lucide-react";
import { format } from "date-fns";

interface WeeklyTimetableDownloadProps {
    sessions: any[];
    weekStartDate: Date;
    selectedTherapistName?: string;
}

export default function WeeklyTimetableDownload({
    sessions,
    weekStartDate,
    selectedTherapistName
}: WeeklyTimetableDownloadProps) {
    return (
        <PDFDownloadLink
            document={
                <WeeklyTimetablePDF
                    sessions={sessions}
                    weekStartDate={weekStartDate}
                    selectedTherapistName={selectedTherapistName}
                />
            }
            fileName={`timetable-${format(weekStartDate, "yyyy-MM-dd")}.pdf`}
            className="text-xs font-bold text-white px-3 py-1.5 bg-red-600 rounded-lg hover:bg-red-700 flex items-center gap-2"
        >
            {({ loading }) =>
                loading ? 'Generating...' : (
                    <>
                        <Download className="w-4 h-4" />
                        PDF
                    </>
                )
            }
        </PDFDownloadLink>
    );
}
