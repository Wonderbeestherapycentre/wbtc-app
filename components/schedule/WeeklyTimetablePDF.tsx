
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";

// Define styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 10,
        fontFamily: "Helvetica",
    },
    header: {
        marginBottom: 10,
        alignItems: "center",
        width: "100%",
    },

    centerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827",
        textAlign: "center",
        width: "100%",
    },

    subtitle: {
        fontSize: 10,
        color: "#6B7280",
        textAlign: "center",
        width: "100%",
    },

    // header: {
    //     marginBottom: 10,
    //     flexDirection: "row",
    //     // justifyContent: "space-between",
    //     alignItems: "center",
    // },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827",
    },
    // subtitle: {
    //     fontSize: 10,
    //     color: "#6B7280",
    // },
    table: {
        display: "flex",
        width: "100%",
        flexGrow: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
        flexGrow: 1,
    },
    tableColHeader: {
        width: "15%", // Approx 100/7.5
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderColor: "#E5E7EB",
        backgroundColor: "#2563EB",
        padding: 5,
    },
    tableColHeaderTimings: {
        width: "10%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderColor: "#E5E7EB",
        backgroundColor: "#2563EB",
        padding: 5,
    },
    tableCol: {
        width: "15%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderColor: "#E5E7EB",
        padding: 4,
        justifyContent: "center",
    },
    tableColTimings: {
        width: "10%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderColor: "#E5E7EB",
        backgroundColor: "#F9FAFB",
        padding: 4,
        justifyContent: "center",
    },
    tableCellHeader: {
        margin: "auto",
        fontSize: 8,
        fontWeight: "bold",
        color: "#FFFFFF",
        textTransform: "uppercase",
    },
    tableCell: {
        margin: "auto",
        fontSize: 7,
        color: "#374151",
    },
    sessionCell: {
        // backgroundColor: "#DBEAFE",
        padding: 2,
        borderRadius: 2,
        marginBottom: 1,
    },
    sessionText: {
        fontSize: 12,
        // color: "#1D4ED8",
        fontWeight: "bold",
        textAlign: "center",
    },
    breakRow: {
        backgroundColor: "#FFF7ED",
    },
    breakCell: {
        color: "#C2410C",
        fontStyle: "italic",
    },
    breakText: {
        fontSize: 7,
        color: "#9A3412",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
    breakArea: {
        backgroundColor: "#FFEDD5",
        opacity: 0.5,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "center",
    },

    // centerTitle: {
    //     fontSize: 16,
    //     fontWeight: "bold",
    //     color: "#111827",
    //     textAlign: "center",
    // },

});

interface Session {
    id: string;
    date: Date | string;
    child: { id: string; name: string };
    therapist: { id: string; name: string };
}

interface WeeklyTimetablePDFProps {
    sessions: Session[];
    weekStartDate: Date;
    selectedTherapistName?: string;
}

export default function WeeklyTimetablePDF({ sessions, weekStartDate, selectedTherapistName }: WeeklyTimetablePDFProps) {
    const weekDays = Array.from({ length: 6 }).map((_, i) => addDays(weekStartDate, i));

    // Generate 45-minute slots from 9:00 AM to 8:30 PM
    const generateTimeSlots = () => {
        const slots: { label: string; startTime: Date; endTime: Date; isBreak?: boolean; breakLabel?: string }[] = [];
        let currentTime = new Date();
        currentTime.setHours(9, 0, 0, 0); // Start at 9:00 AM

        const endTime = new Date();
        endTime.setHours(20, 30, 0, 0); // End at 8:30 PM

        while (currentTime < endTime) {
            // Check for Break Time 11:15 - 11:30
            if (currentTime.getHours() === 11 && currentTime.getMinutes() === 15) {
                const breakEnd = new Date(currentTime);
                breakEnd.setMinutes(breakEnd.getMinutes() + 15);

                slots.push({
                    label: "11.15-11.30",
                    startTime: new Date(currentTime),
                    endTime: breakEnd,
                    isBreak: true,
                    breakLabel: "BREAK"
                });
                currentTime = breakEnd;
                continue;
            }

            // Check for Lunch Time 1:00 PM - 1:45 PM (13:00)
            if (currentTime.getHours() === 13 && currentTime.getMinutes() === 0) {
                const lunchEnd = new Date(currentTime);
                lunchEnd.setMinutes(lunchEnd.getMinutes() + 45);

                slots.push({
                    label: "1.45-2.30",
                    startTime: new Date(currentTime),
                    endTime: lunchEnd,
                    isBreak: true,
                    breakLabel: "LUNCH"
                });
                currentTime = lunchEnd;
                continue;
            }

            const startStr = format(currentTime, "h.mm"); // 9.00

            const nextTime = new Date(currentTime.getTime() + 45 * 60000); // 45 minutes
            const endStr = format(nextTime, "h.mm"); // 9.45

            const label = `${startStr}-${endStr}`;

            slots.push({
                label,
                startTime: new Date(currentTime),
                endTime: new Date(nextTime),
                isBreak: false
            });

            currentTime = nextTime;
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const findSessions = (day: Date, slotStart: Date) => {
        return sessions.filter(s => {
            const sDate = new Date(s.date);
            if (!isSameDay(sDate, day)) return false;

            const sMinutes = sDate.getHours() * 60 + sDate.getMinutes();
            const slotMinutes = slotStart.getHours() * 60 + slotStart.getMinutes();

            const diff = Math.abs(sMinutes - slotMinutes);
            return diff < 5;
        });
    };

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>

                <View style={styles.header}>
                    <Text style={styles.centerTitle}>
                        {selectedTherapistName
                            ? `Therapist: ${selectedTherapistName}`
                            : "All Therapists"}
                    </Text>

                    <Text style={styles.subtitle}>
                        {format(weekStartDate, "MMM d")} -{" "}
                        {format(weekDays[weekDays.length - 1], "MMM d, yyyy")}
                    </Text>
                </View>



                <View style={styles.table}>
                    {/* Header Row */}
                    <View style={styles.tableRow}>
                        <View style={styles.tableColHeaderTimings}>
                            <Text style={styles.tableCellHeader}>TIMINGS</Text>
                        </View>
                        {weekDays.map(day => (
                            <View key={day.toString()} style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>{format(day, "EEEE").toUpperCase()}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Data Rows */}
                    {timeSlots.map((slot, index) => (
                        <View key={index} style={[styles.tableRow, slot.isBreak ? styles.breakRow : {}]}>
                            <View style={[styles.tableColTimings, slot.isBreak ? styles.breakCell : {}]}>
                                <Text style={styles.tableCell}>
                                    {slot.label}
                                </Text>
                                {slot.isBreak && <Text style={styles.breakText}>{slot.breakLabel}</Text>}
                            </View>
                            {weekDays.map(day => {
                                if (slot.isBreak) {
                                    return (
                                        <View key={day.toString()} style={[styles.tableCol, styles.breakArea]} />
                                    );
                                }

                                const slotSessions = findSessions(day, slot.startTime);
                                return (
                                    <View key={day.toString()} style={styles.tableCol}>
                                        {slotSessions.map(session => (
                                            <View key={session.id} style={styles.sessionCell}>
                                                <Text style={styles.sessionText}>{session.child.name}</Text>
                                            </View>
                                        ))}
                                    </View>
                                );
                            })}
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}
